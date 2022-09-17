import { useState } from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

import { commonStyles } from "../../Styles/CommonStyles";
//import { API } from "../API/Api";

export default function Account({ navigation }) {
  const [fullname, setFullmane] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");
  const [number_rg, setNumber_rg] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const [login, setlogin] = useState ([])

  function returnInitial() {
    navigation.navigate("Initial");
  }

  function saveRegistration() {
    if (fullname.length < 8 || fullname.length > 120) {
      alert("O nome deve ter entre 8 á 120 caracteres");
    } else if (!phone_number) {
      alert("Numero de telefone obrigatório");
    } else if (!email) {
      alert("Endereço de email obrigatório");
    } else if (!number_rg) {
      alert("Numero RG obrigatório");
    } else if (cpf.length < 11) {
      alert("O CPF deve ter 11 caracteres");
    } else if (password.length < 8 || password.length > 16) {
      alert("A senha deve ter entre 8 á 16 caracteres");
    } else {
      navigation.navigate("Address", {
        user: {
          fullname: fullname,
          phone_number: phone_number,
          email: email,
          number_rg: number_rg,
          cpf: cpf,
          password: password,
        },
      });
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#5882FA" />

      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>NOVA CONTA</Text>

          <Text style={styles.inputText}>Nome completo</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            maxLength={120}
            onChangeText={setFullmane}
            value={fullname}
          />

          <Text style={styles.inputText}>Telefone</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            keyboardType="phone-pad"
            onChangeText={setPhone_number}
            value={phone_number}
          />

          <Text style={styles.inputText}>Email</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />

          <Text style={styles.inputText}>Nº do RG</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            keyboardType="numeric"
            onChangeText={setNumber_rg}
            value={number_rg}
          />

          <Text style={styles.inputText}>CPF</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            keyboardType="numeric"
            maxLength={11}
            onChangeText={setCpf}
            value={cpf}
          />

          <Text style={styles.inputText}>Password</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            maxLength={16}
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />

          <View style={styles.boxButton}>
            <TouchableOpacity style={styles.button} onPress={returnInitial}>
              <Text style={commonStyles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={saveRegistration}>
              <Text style={commonStyles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  inputText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 42,
    marginBottom: 5,
    color: "#585858",
    alignSelf: "flex-start",
  },

  title: {
    fontSize: 30,
    color: "#5882FA",
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 20,
  },

  boxButton: {
    flexDirection: "row",
    width: "80%",
    //backgroundColor: 'red',
    justifyContent: "space-between",
  },

  button: {
    width: "45%",
    height: 50,
    backgroundColor: "#5882FA",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
  },
});
