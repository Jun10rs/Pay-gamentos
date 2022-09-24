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

import { useEffect, useState } from "react";

import { Picker } from "@react-native-picker/picker";

import { commonStyles } from "../../Styles/CommonStyles";
import { states } from "../../Services/States/states";


export default function Address({ navigation, route }) {

  const { user } = route.params;
  console.log(route.params);

  const [cep, setCep] = useState([]);

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

  function getCep() {
    if (cep.length < 9) {
      fetch("https://viacep.com.br/ws/" + cep + "/json/")
        .then(async (response) => {
          const data = await response.json();
          setStreet(data.logradouro);
          setCity(data.localidade);
          setState(data.uf);
          setRegion(data.bairro);
          setComplement(data.complemento)
          console.log(data);
        })
        .catch(() => {
          alert("Erro");
        });
    } else {
      alert("Digite um CEP válido!");
    }
  }

  useEffect(() => {
    if(cep.length === 8) {
      getCep();
    }
  }, []);

  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <StatusBar backgroundColor="#F2295F" />

      <ScrollView>
        <View style={commonStyles.container}>
          <Text style={commonStyles.title}>ENDEREÇO</Text>

          <Text style={commonStyles.inputText}>CEP</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#F2295F"
            maxLength={8}
            keyboardType="numeric"
            value={cep}
            onChangeText={(cep) => setCep(cep)}
            onBlur={getCep}
          />

          <Text style={commonStyles.inputText}>Rua</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#F2295F"
            value={street}
            onChangeText={setStreet}
          />

          <Text style={commonStyles.inputText}>Cidade</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#F2295F"
            value={city}
            onChangeText={setCity}
          />

          <Text style={commonStyles.inputText}>Estado</Text>
          <View style={styles.boxSelect}>
            <Picker
              selectedValue={state}
              onValueChange={setState}
              style={styles.select}
            >
              <Picker.Item
                label={state}
                value={state}
              />

              {/* LÓGICA PARA USAR COM MAP */}
              {/* <Picker.Item label="Selecione" value="" /> */}
              {/* {states.map((uf) => (
                <Picker.Item
                  style={{
                    //backgroundColor: '#15BF81',
                    color: "#F2295F",
                  }}
                  key={uf.sigla}
                  label={uf.nome}
                  value={uf.sigla}
                />
              ))} */}

            </Picker>
          </View>

          <Text style={commonStyles.inputText}>Bairro</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#F2295F"
            value={region}
            onChangeText={setRegion}
          />

          <Text style={commonStyles.inputText}>Nº da Residência</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#F2295F"
            keyboardType="numeric"
            value={number}
            onChangeText={setNumber}
          />

          <Text style={commonStyles.inputText}>Complemento</Text>
          <TextInput
            style={commonStyles.input}
            placeholder="opcional"
            selectionColor="#F2295F"
            maxLength={16}
            value={complement}
            onChangeText={setComplement}
          />

          <View style={commonStyles.boxButton}>
            <TouchableOpacity
              style={commonStyles.buttonForm}
              onPress={returnAccount}
            >
              <Text style={commonStyles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={commonStyles.buttonForm}
              onPress={saveAddress}
            >
              <Text style={commonStyles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boxSelect: {
    borderWidth: 2,
    borderColor: "#131426",
    borderRadius: 10,
    width: "80%",
    height: 50,
    marginBottom: 10,
    justifyContent: "center",
  },

  select: {
    color: "#424242",
  },
});
