import { useAuth } from "@/components/AuthProvider";
import { supabase } from "@/utils/supabase";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../../styles/colors";
import defaultStyles from "../../styles/defaultStyles";

export default function EditProfileScreen() {
  const { session, isLoading: authLoading } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gpa, setGpa] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadProfile() {
      if (!session?.user) {
        if (mounted) setInitialLoading(false);
        return;
      }

      setInitialLoading(true);
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("first_name, last_name, gpa, school_name")
          .eq("id", session.user.id)
          .single();

        if (mounted && data) {
          setFirstName(data.first_name ?? "");
          setLastName(data.last_name ?? "");
          setGpa(data.gpa?.toString() ?? "");
          setSchoolName(data.school_name ?? "");
        }
      } catch (err) {
        Alert.alert("Failed to load profile");
      } finally {
        if (mounted) setInitialLoading(false);
      }
    }

    loadProfile();
    return () => {
      mounted = false;
    };
  }, [session]);

  function validate() {
    if (!firstName.trim()) {
      Alert.alert("Please enter a first name.");
      return false;
    }
    if (!lastName.trim()) {
      Alert.alert("Please enter a last name.");
      return false;
    }
    if (!schoolName.trim()) {
      Alert.alert("Please enter a school name.");
      return false;
    }

    const gpaNumber = Number(gpa);
    if (isNaN(gpaNumber) || gpaNumber < 0 || gpaNumber > 5) {
      Alert.alert("GPA must be a number between 0.0 and 5.0");
      return false;
    }

    return true;
  }

  async function saveProfile() {
    if (!session?.user) {
      Alert.alert("You must be signed in.");
      return;
    }

    if (!validate()) return;

    setLoading(true);
    try {
      const payload = {
        id: session.user.id,
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        gpa: Number(gpa),
        school_name: schoolName.trim(),
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from("profiles").upsert(payload);

      if (error) {
        Alert.alert("Save failed", error.message);
        return;
      }

      Alert.alert("Saved", "Your profile has been updated.");
    } catch (err) {
      Alert.alert("Unexpected error", String(err));
    } finally {
      setLoading(false);
    }
  }

  if (initialLoading || authLoading) {
    return (
      <View style={[defaultStyles.pageContainer, styles.center]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={{ marginTop: 12 }}>Loading profile…</Text>
      </View>
    );
  }

  return (
    <View style={defaultStyles.pageContainer}>
      <View style={styles.form}>
        <Text style={defaultStyles.boldText}>First name</Text>
        <TextInput
        style={defaultStyles.textInput}
          placeholder="Enter"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={defaultStyles.boldText}>Last name</Text>
        <TextInput
        style={defaultStyles.textInput}
          placeholder="Enter"
          value={lastName}
          onChangeText={setLastName}
        />
        <Text style={defaultStyles.boldText}>    School</Text>
        <TextInput
        style={defaultStyles.textInput}
          placeholder="Enter"
          value={schoolName}
          onChangeText={setSchoolName}
        />
        <Text style={defaultStyles.boldText}>      GPA</Text>
        <TextInput
        style={defaultStyles.textInput}
          placeholder="Enter(0.0 – 5.0)"
          value={gpa}
          onChangeText={setGpa}
          keyboardType="decimal-pad"
        />
      </View>

      <TouchableOpacity
        onPress={saveProfile}
        style={defaultStyles.signButton}
      ><Text style={defaultStyles.signButtonText}>{loading ? "Saving..." : "Save Profile"}</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 24,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
