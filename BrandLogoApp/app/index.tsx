import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, Pressable, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import defaultStyles from './styles/defaultStyles'

const index = () => {
  const [hidden, setHidden] = useState(true);
  const router = useRouter();
    const openTabNav = () => {
      router.push({ pathname: "/(tabs)/questions",params: { category: questionCategory } });};
  return (
    <SafeAreaView style={defaultStyles.pageContainer}>
        <Image style={defaultStyles.img} source={require("../assets/images/adaptive-icon.png")}/>
        <TextInput
          style={defaultStyles.textInput}
          placeholder="Email"
        />
        <TextInput
          style={defaultStyles.textInput}
          placeholder="Password"
          secureTextEntry={true}
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

export default index

