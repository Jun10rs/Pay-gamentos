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

import { useState } from "react";

import { Picker } from "@react-native-picker/picker";

import { commonStyles } from "../../Styles/CommonStyles";
import { states } from "../../Services/States/states";

export default function Address({navigation, route}) {
  const { user } = route.params;
  console.log(route.params)

  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [region, setRegion] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");

  function returnAccount() {
    navigation.navigate("Account");
  }

  function saveAddress() {
    if (!cep) {
      alert("Informe um CEP válido!");
    } else if (!street) {
      alert("Nome da rua obrigatório");
    } else if (!city) {
      alert("Nome da cidade obrigatório");
    } else if (!state) {
      alert("Selecione o estado!");
    } else if (!region) {
      alert("Nome do bairro obrigatório");
    } else if (!number) {
      alert("Informe o numero da residência");
    } else {
      navigation.navigate("Billings", {
        user: user,     
        address: {
          cep: cep,
          street: street,
          city: city,
          state: state,
          region: region,
          number: number,
          complement: complement,
        },
      });
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#5882FA" />

      <ScrollView>
        <View style={styles.container}>
          <Text style={commonStyles.title}>ENDEREÇO</Text>

          <Text style={styles.inputText}>CEP</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            maxLength={120}
            keyboardType="numeric"
            value={cep}
            onChangeText={setCep}
          />

          <Text style={styles.inputText}>Rua</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            value={street}
            onChangeText={setStreet}
          />

          <Text style={styles.inputText}>Cidade</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            value={city}
            onChangeText={setCity}
          />

          <View style={styles.boxSelect}>
            <Picker
              selectedValue={state}
              onValueChange={(value) => setState(value)}
              style={styles.select}
              
            >
              <Picker.Item label="Selecione" value="" />
              {
                states.map((uf)=> (<Picker.Item key={uf.sigla} label={uf.nome} value={uf.sigla} />))
              }
            </Picker>
          </View>

          <Text style={styles.inputText}>Bairro</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            value={region}
            onChangeText={setRegion}
          />

          <Text style={styles.inputText}>Nº da Residência</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            keyboardType="decimal-pad"
            value={number}
            onChangeText={setNumber}
          />

          <Text style={styles.inputText}>Complemento</Text>
          <TextInput
            style={commonStyles.input}
            placeholder="opcional"
            selectionColor="#5882FA"
            maxLength={16}
            secureTextEntry
            value={complement}
            onChangeText={setComplement}
          />

          <View style={commonStyles.boxButton}>
            <TouchableOpacity style={styles.button} onPress={returnAccount}>
              <Text style={commonStyles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={saveAddress}>
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

  boxSelect: {
    borderWidth: 1,
    borderColor: "#5882FA",
    borderRadius: 10,
    width: "80%",
    height: 50,
    marginVertical: 10,
    justifyContent: "center",
  },

  select: {
    color: "#585858",
  },
});
