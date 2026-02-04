import { supabase } from "@/utils/supabase";
import React, { useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddEvent from "../../components/addEvent";
import defaultStyles from "../../styles/defaultStyles";
type Event = {
  id: string;
  name: string;
  time: string;
};

export default function Settings() {
  const [events, setEvents] = useState<Event[]>([
    { id: "1", name: "Basketball Practice", time: "7:00 PM" },
    { id: "2", name: "Team Meeting", time: "9:00 PM" },
  ]);
  const [name, setName] = useState<string>("My");

  React.useEffect(() => {
  async function getProfile() {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("profiles")
      .select("first_name")
      .eq("id", user.id)
      .single();

    if (data?.first_name) {
      setName(data.first_name);
    }
  }

  getProfile();
}, []);

  const handleAddEvent = (newEvent: Event) => {
    setEvents([...events, newEvent]);
  };
  async function handleLogout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout error:", error);
        Alert.alert("Logout failed", error.message);
      }
    } catch (err: any) {
      Alert.alert("Logout failed", err?.message ?? String(err));
    }
  }

  return (
    <SafeAreaView style={defaultStyles.pageContainer}>
        <Text style={defaultStyles.boldHomeText}>{name}'s Calendar</Text>
        <View style={defaultStyles.schedule}>
          <AddEvent onAddEvent={handleAddEvent} />

          <FlatList
            data={events}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={defaultStyles.card}>
                <Text style={defaultStyles.text}>{item.name}</Text>
                <Text style={{ color: "white" }}>{item.time}</Text>
              </View>
            )}
          />
        </View>
      <TouchableOpacity style={defaultStyles.logoutButton} onPress={handleLogout}><Text style={defaultStyles.signButtonText}>Log Out</Text></TouchableOpacity>
    </SafeAreaView>
  );
}