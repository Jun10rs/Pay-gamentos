import { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Switch,
} from "react-native";

import { commonStyles } from "../../Styles/CommonStyles";
import { API } from "../../Services/API/Api";

export default function Terms({ navigation, route }) {

  const { user, address, billings } = route.params;
  console.log(route.params);

  const [enabled, setEnabled] = useState(false);


  function returnBillings() {
    navigation.navigate("Billings");
  }

  function addProfile() {
    fetch(API + "/users", {
      body: JSON.stringify({
        fullname: user.fullname,
        phone_number: user.phone_number,
        email: user.email,
        number_rg: user.number_rg,
        cpf: user.cpf,
        password: user.password,
        address: {
          cep: address.cep,
          street: address.street,
          city: address.city,
          state: address.state,
          region: address.region,
          number: address.number,
          complement: address.complement,
        },
        billings_day: billings,
      }),
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(() => {
        alert("Conta cadastrada com sucesso");
        navigation.navigate("Login");
      })
      .catch(() => alert("possivel erro"));
  }

  //console.log(addProfile)

  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <StatusBar backgroundColor="#F2295F" />

      <ScrollView>
        <View style={commonStyles.container}>
          <Text style={commonStyles.title}>Termos</Text>

          <Text style={styles.terms}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>

          <Text style={styles.terms}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>

          <Text style={styles.terms}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>

          <Text style={styles.terms}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>

          <View style={styles.checkbox}>
            <Switch
              trackColor={{ false: "#131426", true: "#131426" }}
              thumbColor={enabled ? "#F2295F" : "#16F28B"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setEnabled(!enabled)}
              value={enabled}
            />
            <Text style={styles.textCheckbox}>
              Aceito os termos
            </Text>
          </View>

          <View style={commonStyles.boxButton}>
            <TouchableOpacity style={commonStyles.buttonForm} onPress={returnBillings}>
              <Text style={commonStyles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={commonStyles.buttonForm} 
            onPress={addProfile}
            disabled={!enabled}
            >
              <Text style={commonStyles.buttonText}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  terms: {
    fontSize: 14,
    textAlign: "justify",
    marginHorizontal: 20,
    marginVertical: 20,
    color: '#424242'
  },

  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },

  textCheckbox: {
    color: "#F2295F", 
    fontSize: 20, 
    marginLeft: 10
  }
});
