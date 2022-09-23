import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView
} from "react-native";

import { useState } from "react";
import { API } from "../../Services/API/Api";

import { commonStyles } from "../../Styles/CommonStyles";

import Logo from "../../../assets/pay_gamentos3.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  
  const [loading, setLoading] = useState(true);
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

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
          const data = await response.json();
          if (data.length === 1) {
            await AsyncStorage.setItem(
              "@pay_gamentos:id_login",
              JSON.stringify(data[0])
            );
            setTimeout(()=> {
              if(loading === true){
                navigation.navigate("StackTabs");
              }
            },2000)
            setLoading(false)
          } else {
            alert("Usuário não encontrado");
          }
        })
        .catch(() => console.log("Houve um erro"));
    }
  }

  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <ScrollView>
      <View style={commonStyles.container}>
        <Image style={styles.logo} source={Logo} />

        <TextInput
          placeholder="CPF"
          style={commonStyles.input}
          keyboardType="numeric"
          selectionColor="#F2295F"
          onChangeText={setCpf}
          value={cpf}
          maxLength={11}
        />
  
        <TextInput
          placeholder="Password"
          style={commonStyles.input}
          selectionColor="#F2295F"
          keyboardType="numeric"
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
        {loading === false && 
        <ActivityIndicator 
        style={styles.indicator}
        size={"large"}
        color='#F2295F'
        />}
        
        <Text style={styles.textFree} onPress={navigateNewAccount}>
          Abrir conta gratuita
        </Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "80%",
    height: 190,
    marginVertical: 70,
  },

  textFree: {
    color: "#F2295F",
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
    textDecorationLine: "underline"
  },

  indicator:{
    marginTop:20,
  },
});

