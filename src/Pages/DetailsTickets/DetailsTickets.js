import { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { API } from "../../Services/API/Api";
import { commonStyles } from "../../Styles/CommonStyles";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export default function DetailsTickets({ navigation, route }) {

  const dataAtual = format(new Date(), "dd-MM-yy HH:mm", { locale: ptBR });
  const [loading, setLoading] = useState(true);

  const { debts } = route.params;

  function returnScan() {
    navigation.navigate("BarCode");
  }

  function savedTickets() {
    fetch(API + "/invoices", {
      body: JSON.stringify({
        recipient: debts.recipient,
        amount: debts.amount,
        date: dataAtual,
        code: debts.id,
        user_id: debts.user_id,
        cashback: Number(debts.amount * 0.1).toFixed(2),
      }),
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(() => {
        setTimeout(() => {
          if (loading === true) {
            alert("Boleto pago com sucesso!");
            navigation.navigate("Tickets");
          }
        }, 2000);
        setLoading(false)
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
          <Text style={styles.valueTickets}>
            R$ {Number(debts.amount * 0.1).toFixed(2)}
          </Text>
        </View>

        <View style={styles.boxButton}>
        {loading === false && 
        <ActivityIndicator 
        size={"large"}
        color='#F2295F'
        />}
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
