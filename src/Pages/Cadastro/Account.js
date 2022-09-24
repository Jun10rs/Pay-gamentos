import { useState } from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

import { commonStyles } from "../../Styles/CommonStyles";

export default function Account({ navigation }) {
  const [fullname, setFullmane] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");
  const [number_rg, setNumber_rg] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

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
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <StatusBar backgroundColor="#F2295F" />

      <ScrollView>
        <View style={commonStyles.container}>
          <Text style={commonStyles.title}>NOVA CONTA</Text>

          <Text style={commonStyles.inputText}>Nome completo</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#F2295F"
            maxLength={120}
            onChangeText={setFullmane}
            value={fullname}
          />

          <Text style={commonStyles.inputText}>Telefone</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#F2295F"
            keyboardType="phone-pad"
            onChangeText={setPhone_number}
            value={phone_number}
          />

          <Text style={commonStyles.inputText}>Email</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#F2295F"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />

          <Text style={commonStyles.inputText}>Nº do RG</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#F2295F"
            keyboardType="numeric"
            onChangeText={setNumber_rg}
            value={number_rg}
          />

          <Text style={commonStyles.inputText}>CPF</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#F2295F"
            keyboardType="numeric"
            maxLength={11}
            onChangeText={setCpf}
            value={cpf}
          />

          <Text style={commonStyles.inputText}>Password</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#F2295F"
            maxLength={16}
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />

          <View style={commonStyles.boxButton}>
            <TouchableOpacity
              style={commonStyles.buttonForm}
              onPress={returnInitial}
            >
              <Text style={commonStyles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={commonStyles.buttonForm}
              onPress={saveRegistration}
            >
              <Text style={commonStyles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
