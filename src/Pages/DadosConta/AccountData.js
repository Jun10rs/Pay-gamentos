import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useState, useEffect } from "react";
import { commonStyles } from "../../Styles/CommonStyles";

export default function AccountData({ navigation }) {
  const [result, setResult] = useState("");

  useEffect(() => {
    getResult();
  }, []);

  const getResult = async () => {
    const value = await AsyncStorage.getItem("@pay_gamentos:id_login");
    setResult(JSON.parse(value));
  };
  console.log(result);

  function exitApp() {
    navigation.navigate("Initial");
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#81F7F3" }}>
      <StatusBar backgroundColor="#5882FA" />
      <View style={styles.container}>
        <Text style={commonStyles.title}>Dados da conta</Text>
        <Text>Nome: {result.fullname}</Text>
        <Text>CPF: {result.cpf}</Text>
        <Text>Telefone: {result.phone_number}</Text>
        <Text>Email: {result.email}</Text>
        <Text>RG: {result.number_rg}</Text>
        <Text>CEP: {result.billing_day}</Text>
        <Text>Rua: {result.street}</Text>
        <Text>Nº da Residência: {result.number}</Text>
        <Text>Bairro: {result.region}</Text>
        <Text>Cidade: {result.city}</Text>
        <Text>Estado: {result.state}</Text>

        <View style={styles.boxButton}>
          <TouchableOpacity style={styles.button} onPress={exitApp}>
            <Text style={commonStyles.buttonText}>Sair do App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: "center",
    //backgroundColor: "grey",
    justifyContent: "center",
  },
  button: {
    width: "45%",
    height: 50,
    backgroundColor: "#5882FA",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 20,
  },

  boxButton: {
    //flexDirection: "row",
    width: "80%",
    alignItems: "center",
    marginTop: 20,
    //backgroundColor:'red'
  },
});
