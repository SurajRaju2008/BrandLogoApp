import defaultStyles from '@/styles/defaultStyles';
import { supabase } from '@/utils/supabase';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import Profile from './Profile';

// FROM MRS DENNA'S ROSTER.TSX

export default function RosterScreen() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

const fetchProfiles = useCallback(async () => {
  setError(null);
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, first_name, last_name, school_name, gpa")
      .order("gpa", { ascending: false }) 
      .order("last_name", { ascending: true })
      .order("first_name", { ascending: true });

    if (error) {
      console.error("fetchProfiles error:", error);
      setError(error.message ?? "Failed to load profiles");
      setProfiles([]);
      return;
    }

    // data may be typed as any[] here; we map it to our local state type
    setProfiles((data ?? []) as Profile[]);
  } catch (err) {
    console.error("fetchProfiles exception:", err);
    setError(String(err));
    setProfiles([]);
  } finally {
    setLoading(false);
    setRefreshing(false);
  }
}, []);

// Pull-to-refresh
const onRefresh = useCallback(() => {
  setRefreshing(true);
  fetchProfiles();
}, [fetchProfiles]);

useEffect(() => {
  fetchProfiles();

  const table = "profiles";
  let channel: any;
  let legacySubscription: any;

  // Subscribe to realtime updates using modern channel API if available
  try {
    channel = supabase
      .channel(`public-${table}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table,
        },
        () => {
          // simple and safe: re-fetch the list on any change
          fetchProfiles();
        },
      )
      .subscribe();
  } catch (err) {
    console.warn("Channel API failed, using legacy realtime:", err);

    try {
      legacySubscription = (supabase as any)
        .from(table)
        .on("*", () => {
          fetchProfiles();
        })
        .subscribe();
    } catch (err2) {
      console.warn("Legacy realtime subscribe also failed:", err2);
    }
  }

  return () => {
    // Cleanup modern channel
    if (channel) {
      try {
        supabase.removeChannel?.(channel);
      } catch (err) {
        if (channel.unsubscribe) channel.unsubscribe();
      }
    }
    // Cleanup legacy subscription
    if (legacySubscription) {
      try {
        legacySubscription.unsubscribe?.();
      } catch (err) {
        // ignore
      }
    }
  };
}, [fetchProfiles]);

  return (
  <View style={defaultStyles.pageContainer}>
    <Text style={defaultStyles.boldHomeText}>Highest GPA</Text>

    <FlatList
      data={profiles}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <View style={defaultStyles.row}>
          <Text style={defaultStyles.rank}>{index + 1}.</Text>
          <View>
            <Text style={defaultStyles.name}>
              {item.first_name} {item.last_name}
            </Text>
            <Text style={defaultStyles.school}>{item.school_name}</Text>
          </View>
          <Text style={defaultStyles.gpa}>    {item.gpa}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={{ paddingBottom: 24 }}
    />
  </View>
);
}
