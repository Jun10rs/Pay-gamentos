import {
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
  View
} from "react-native";

import LottieView from "lottie-react-native";

import { commonStyles } from "../../Styles/CommonStyles";

import Animation from "../../../assets/ZByLJvonQa.json";

export default function Initial({navigation}) {
 
   function navigateLogin() {
    navigation.navigate ('Login');
   }

   function navigateNewAccount () {
    navigation.navigate ('Account');
   }

  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <StatusBar backgroundColor="#F2295F" />
      <View style={commonStyles.container}>
      <LottieView
        autoPlay
        style={{ height: Dimensions.get("screen").height * 0.45, marginVertical: 20 }}
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

      </View>

      
    </SafeAreaView>
  );
}

