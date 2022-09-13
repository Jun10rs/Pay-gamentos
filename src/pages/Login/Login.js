import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { commonStyles } from "../CommonStyles/CommonStyles";

import Logo from "../../../assets/pay_gamentos.png";

export default function Login() {

  return (

    <SafeAreaView style={styles.container}>
      <Image 
      style={styles.logo} 
      source={Logo} 
      />
      
      <TextInput
        placeholder="CPF"
        style={styles.input}
        selectionColor="#5882FA"
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        selectionColor="#5882FA"
      />

      <TouchableOpacity style={commonStyles.button}>
        <Text style={commonStyles.buttonText}>Logar</Text>
      </TouchableOpacity>

      <Text style={styles.textFree}>Abrir conta gratuita</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: "80%",
    height: 150,
    //backgroundColor: "red",
    marginBottom: 40,
  },

  input: {
    width: "80%",
    height: 50,
    borderColor: "#5882FA",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },

  textFree: {
    color: "#5882FA",
    fontSize: 20,
    marginTop: 10,
  },
});
