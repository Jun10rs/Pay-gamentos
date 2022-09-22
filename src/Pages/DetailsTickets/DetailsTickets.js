import { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { API } from "../../Services/API/Api";
import { commonStyles } from "../../Styles/CommonStyles";

//import { format, parseISO } from "date-fns";
//import ptBR from "date-fns/locale/pt-BR";

export default function DetailsTickets({ navigation, route }) {
  //const [cashback, setCashback] = useState("");

  const { debts } = route.params;
  console.log(route.params);

  function returnScan() {
    navigation.navigate("BarCode");
  }

  function savedTickets() {
    fetch(API + "/invoices", {
      body: JSON.stringify({
        recipient: debts.recipient,
        amount: debts.amount,
        date: debts.date,
        code: debts.id,
        user_id: debts.user_id,
        cashback:debts.amount*0.1,
      }),
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    })
     .then(() => {
        alert("Boleto pago com sucesso!");
        navigation.navigate("Tickets");
      })
      .catch(() => alert("possivel erro"));
  }

  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <StatusBar backgroundColor="#F2295F" />

      <View style={commonStyles.container}>
        <View style={styles.boxTickets}>
          <Text style={styles.titleTickets}>Para</Text>
          <Text style={styles.valueTickets}>{debts.recipient}</Text>

          <Text style={styles.titleTickets}>Valor</Text>
          <Text style={styles.valueTickets}>R$ {debts.amount}</Text>

          <Text style={styles.titleTickets}>Código do boleto</Text>
          <Text style={styles.valueTickets}>{debts.id}</Text>

          <Text style={styles.titleTickets}>Cashback</Text>
          <Text style={styles.valueTickets}>R$ {debts.amount * 0.1}</Text>
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={commonStyles.buttonInitial}
            onPress={savedTickets}
          >
            <Text style={commonStyles.buttonText}>Pagar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={returnScan}
            style={{
              ...commonStyles.buttonInitial,
              backgroundColor: "#F2295F",
            }}
          >
            <Text style={commonStyles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boxButton: {
    width: "80%",
    alignItems: "center",
  },

  titleTickets: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",
  },

  valueTickets: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#424242",
  },

  boxTickets: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#131426",
    marginVertical: 50,
    width: "80%",
    padding: 10,
    backgroundColor: "#168C61",
  },
});
