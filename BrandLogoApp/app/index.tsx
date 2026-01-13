import React from 'react'
import { Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import defaultStyles from './styles/defaultStyles'

const index = () => {
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
        />
      <TouchableOpacity style={defaultStyles.button}><Text style={defaultStyles.buttonText}>Login</Text></TouchableOpacity>
      <TouchableOpacity style={defaultStyles.signButton}><Text style={defaultStyles.signButtonText}>Sign-up</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default index

