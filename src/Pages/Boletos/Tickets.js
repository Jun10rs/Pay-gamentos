import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { commonStyles } from "../../Styles/CommonStyles";
import { API } from "../../Services/API/Api";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

export default function Tickets() {
  const telaFocada = useIsFocused();

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    if (telaFocada === true) {
      getTickets();
    }
  }, [telaFocada]);

  function getTickets() {
    fetch(API + "/invoices")
      .then(async (response) => {
        const data = await response.json();
        setInvoices(data);
      })
      .catch((error) => {
        alert("deu erro");
        console.log(error);
      });
  }

  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <StatusBar backgroundColor="#F2295F" />

      <Text style={commonStyles.title}>Boletos Pagos</Text>

      <View style={commonStyles.container}>

        {
        invoices.map((invoices, id) => (
          
          <View style={styles.boxTickets} key={id}>
            <Text style={styles.textDate}>{invoices.date}</Text>
            <Text style={styles.textAmount}>R$ {invoices.amount}</Text>

            <Text style={styles.textRecipient}>{invoices.recipient}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  boxTickets: {
    borderRadius: 10,
    borderWidth: 2,
    width: "90%",
    height: 90,
    borderColor: "#131426",
    padding: 10,
    backgroundColor: "#168C61",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },

  textDate: {
    fontSize: 18,
    color: '#FFF'
  },

  textAmount: {
    fontSize: 20,
    marginLeft: 140,
    fontWeight: "bold",
    color: '#424242',
  },

  textRecipient: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#16F28B",
    marginTop: 10,
  },
});
