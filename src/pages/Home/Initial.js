import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";

import { useState, useEffect } from "react";
import LottieView from "lottie-react-native";

import { commonStyles } from "../CommonStyles/CommonStyles";

import Animation from "../../../assets/94500-snap-and-pay.json";

export default function Initial({navigation}) {
   function navigateLogin() {
    navigation.navigate ('Login');
   }

   function navigateNewAccount () {
    navigation.navigate ('Account');
   }

  return (
    <SafeAreaView style={styles.container}>

      <LottieView
        autoPlay
        style={{ height: Dimensions.get("screen").height * 0.4, marginBottom: 20 }}
        source={Animation}
      />

      <TouchableOpacity style={commonStyles.button}
      onPress={navigateNewAccount}
      >
        <Text style={commonStyles.buttonText}>Abrir conta gratuita</Text>
      </TouchableOpacity>

      <TouchableOpacity style={commonStyles.button}
        onPress={navigateLogin}
      >
        <Text style={commonStyles.buttonText}>Fazer login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

 
});
