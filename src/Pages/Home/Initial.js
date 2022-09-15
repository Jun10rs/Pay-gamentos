import {
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar
} from "react-native";

import { useState, useEffect } from "react";
import LottieView from "lottie-react-native";

import { commonStyles } from "../../Styles/CommonStyles";

import Animation from "../../../assets/94500-snap-and-pay.json";

export const API = 'http://1616-2804-15e4-8060-600-2e7e-2635-7654-2464.ngrok.io'

export default function Initial({navigation}) {

  
   function navigateLogin() {
    navigation.navigate ('Login');
   }

   function navigateNewAccount () {
    navigation.navigate ('Account');
   }

  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar backgroundColor="#5882FA" />

      <LottieView
        autoPlay
        style={{ height: Dimensions.get("screen").height * 0.4, marginBottom: 20 }}
        source={Animation}
      />

      <TouchableOpacity style={commonStyles.buttonInitial}
      onPress={navigateNewAccount}
      >
        <Text style={commonStyles.buttonText}>Abrir conta gratuita</Text>
      </TouchableOpacity>

      <TouchableOpacity style={commonStyles.buttonInitial}
        onPress={navigateLogin}
      >
        <Text style={commonStyles.buttonText}>Fazer login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

