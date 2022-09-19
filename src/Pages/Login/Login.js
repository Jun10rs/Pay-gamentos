import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Alert,
  View,
} from "react-native";

import { useState } from "react";
import { API } from "../../API/Api"

import { commonStyles } from "../../Styles/CommonStyles";

import Logo from "../../../assets/pay_gamentos.png";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login({ navigation }) {

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  function navigateNewAccount() {
    navigation.navigate("Account");
  }

  function validarLogin() {
    if (cpf.length < 11) {
      alert("CPF obrigatório");
    } else if (password.length < 8) {
      alert("Password obrigatório");
    } else if (cpf.length === 11 || password.length === 6) {
      fetch(API + "/users?cpf=" + cpf + "&password=" + password)
        .then(async (response) => {
          //AsyncStorage.setItem('@pay_gamentos:id_login', JSON.stringify([cpf]))
          const data = await response.json();
          if (data.length === 1) {
            navigation.navigate("Home")
          } else {
            alert ('Usuário não encontrado')
          }
        })
        .catch(() => console.log("Houve um erro"));
    }
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={commonStyles.container}>
      <Image style={styles.logo} source={Logo} />

      <TextInput
        placeholder="CPF"
        style={styles.input}
        keyboardType="number-pad"
        selectionColor="#5882FA"
        onChangeText={setCpf}
        value={cpf}
        maxLength={11}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        selectionColor="#5882FA"
        keyboardType="number-pad"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        maxLength={8}
      />

      <TouchableOpacity
        style={commonStyles.buttonInitial}
        onPress={validarLogin}
      >
        <Text style={commonStyles.buttonText}>Logar</Text>
      </TouchableOpacity>

      <Text style={styles.textFree} onPress={navigateNewAccount}>
        Abrir conta gratuita
      </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 30,
  },
});
