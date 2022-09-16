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
import { API } from "../API/Api";

import { useState, useEffect } from "react";

import { Picker } from "@react-native-picker/picker";

import { commonStyles } from "../../Styles/CommonStyles";
import Billings from "../Cobrança/Billings";

export default function Address({ navigation, route }) {
  const [uf, setUf] = useState([]);

  //const { users } = route.params;

  const [select, setSelect] = useState("");

  function returnAccount() {
    navigation.navigate("Account");
  }

  function navigateBillings() {
    fetch(API + "/uf?_limit=10")
      .then(async (response) => {
        const data = await response.json();
        setUf(data);
      })
      .catch(() => console.log("Houve um erro"));
 
    navigation.navigate("Billings", {
      onPress: () => navigation.navigate( Billings, {
        users: users,
        select: setSelect
      })
      
    });
  }
  function selectState (statenome) {
    setS

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
          />

          <Text style={styles.inputText}>Rua</Text>
          <TextInput style={commonStyles.input} selectionColor="#5882FA" />

          <Text style={styles.inputText}>Cidade</Text>
          <TextInput style={commonStyles.input} selectionColor="#5882FA" />

          {uf.map((state) => (
            <View style={styles.boxSelect}>
              <Picker
                selectedValue={uf}
                onValueChange={(value) => setUf(value)}
                style={styles.select}
                mode='dialog'
              >
                <Picker.Item label={state.nome} value={state.sigla} />
              </Picker>
            </View>
          ))}

          <Text style={styles.inputText}>Bairro</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            keyboardType="numeric"
            maxLength={11}
          />

          <Text style={styles.inputText}>Nº da Residência</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            keyboardType="decimal-pad"
          />

          <Text style={styles.inputText}>Complemento</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            maxLength={16}
            secureTextEntry
          />

          <View style={commonStyles.boxButton}>
            <TouchableOpacity style={styles.button} onPress={returnAccount}>
              <Text style={commonStyles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={navigateBillings}>
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
