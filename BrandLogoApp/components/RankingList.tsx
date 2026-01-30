import defaultStyles from '@/styles/defaultStyles';
import { supabase } from '@/utils/supabase';
import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Profile from './Profile';

  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

const RankingList = () => {useCallback(async () => {
    setError(null);
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, first_name, last_name, school_name, gpa")
        .order("gpa", { ascending: false });

      if (error) {
       setProfiles(data);
      }
      setLoading(false);

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
  return (
    <View>
      <Text style={defaultStyles.boldHomeText}>Highest GPA</Text>
        <FlatList
          data={gpa}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text>{item}</Text>
          )}
        />
    </View>
  )
}

export default RankingList

const styles = StyleSheet.create({})