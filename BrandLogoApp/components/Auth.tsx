import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, Pressable, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import defaultStyles from '../app/styles/defaultStyles'

const Auth = () => {
    const [hidden, setHidden] = useState(true);

    const [password, setPassword] = useState("");
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

  return (
     <SafeAreaView style={defaultStyles.pageContainer}>
        <Image style={defaultStyles.img} source={require("../../assets/images/adaptive-icon.png")}/>
        <TextInput
          style={defaultStyles.textInput}
          placeholder="Email"
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
      <TouchableOpacity style={defaultStyles.button} onPress={openTabNav}><Text style={defaultStyles.buttonText}>Login</Text></TouchableOpacity>
      <TouchableOpacity style={defaultStyles.signButton} onPress={openTabNav}><Text style={defaultStyles.signButtonText}>Sign-up</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default Auth

