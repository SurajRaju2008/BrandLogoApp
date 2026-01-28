import { supabase } from '@/utils/supabase'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Alert, AppState, AppStateStatus, Image, Pressable, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import defaultStyles from '../app/styles/defaultStyles'

const Auth = () => {
    const [hidden, setHidden] = useState(true);

    const [email, setEmail] = useState("@gmail.com");
    const [password, setPassword] = useState("123456");
    const router = useRouter();
    const openTabNav = () => {
        let error = "";
        let valid = false;
        if(password.length < 6){
            error = "Needs 6 or more characters";
        }
        //Learned how to check if there is a number present in the Password using ChatGPT
        else if(!(/[0-9]/.test(password))){
            error = "Needs 1 or more numbers";
        }
        else{
            valid = true;
        }

        if(valid){
            console.log("Passes: " + password);
            router.push({ pathname: "/(tabs)" });
        }
        else{
            console.log(password +" "+ error);
        }
    };

     useEffect(() => {
    const handleAppStateChange = (nextState: AppStateStatus) => {
      if (nextState === "active") {
        supabase.auth.startAutoRefresh();
      } else {
        try {
          supabase.auth.stopAutoRefresh();
        } catch {}
      }
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange,
    );

    if (AppState.currentState === "active") {
      supabase.auth.startAutoRefresh();
    }

    return () => {
      if (typeof subscription?.remove === "function") {
        subscription.remove();
      }
      try {
        supabase.auth.stopAutoRefresh();
      } catch {}
    };
  }, []);

  async function signInWithEmail() {
    openTabNav();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert(error.message);
    }
  }

  async function signUpWithEmail() {
    openTabNav();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert(error.message);
    }
  }


  return (
     <SafeAreaView style={defaultStyles.pageContainer}>
        <Image style={defaultStyles.img} source={require("../assets/images/adaptive-icon.png")}/>
        <TextInput
          style={defaultStyles.textInput}
          placeholder="Email"
          onChangeText={setEmail}
        />
        <TextInput
          style={defaultStyles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        //Pressable to hide/show passsword from chat
         <Pressable onPress={() => setHidden(!hidden)}>
          <Text style={defaultStyles.toggle}>
            {hidden ? "Show" : "Hide"}
          </Text>
        </Pressable>
      <TouchableOpacity style={defaultStyles.button} onPress={signInWithEmail}><Text style={defaultStyles.buttonText}>Login</Text></TouchableOpacity>
      <TouchableOpacity style={defaultStyles.signButton} onPress={signUpWithEmail}><Text style={defaultStyles.signButtonText}>Sign-up</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default Auth


