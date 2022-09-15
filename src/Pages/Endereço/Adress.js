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

import { useState, useEffect } from "react";

import { Picker } from "@react-native-picker/picker";

import { commonStyles } from "../../Styles/CommonStyles";

export default function Account({ navigation }) {

  const [category, setCategory] = useState("");

  function returnAccount() {
    navigation.navigate("Account");
  }

  function navigateBillings () {
    navigation.navigate ('Billings')
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
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            keyboardType="phone-pad"
          />

          <Text style={styles.inputText}>Cidade</Text>
          <TextInput
            style={commonStyles.input}
            selectionColor="#5882FA"
            keyboardType="email-address"
          />
        <View style={styles.boxSelect}>
          <Picker
            selectedValue={category}
            onValueChange={(value) => setCategory(value)}
            style={styles.select}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Acre" value="acre" />
            <Picker.Item label="Santa Catarina" value="sc" />
            <Picker.Item label="São Paulo" value="sp" />
          </Picker>
          </View>

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
            <TouchableOpacity 
            style={styles.button} 
            onPress={returnAccount}
            >
              <Text style={commonStyles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.button}
            onPress={navigateBillings}
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
    marginBottom: 20
  },

  boxSelect:{
    borderWidth: 1, 
    borderColor: '#5882FA', 
    borderRadius: 10, width:'80%', 
    height: 50, 
    marginVertical: 10,
    justifyContent:'center'
  },

  select: {
    color: "#585858",
  },
});
