import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { commonStyles } from "../../Styles/CommonStyles";
import { API } from "../../API/Api";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

// const [amount, setAmount] = useState("");
// const [date, setDate] = useState("");
// const [recipient, setRecipient] = useState("");

export default function Tickets() {
  //const screenFocused = useIsFocused();

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getTickets();
  });

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
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#5882FA" />

      <View style={styles.container}>
        <Text style={commonStyles.title}>Boletos Pagos</Text>

        {invoices.map((invoices, id) => (
          <View style={styles.boxTickets} key={id}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textDate}>{invoices.date}</Text>
              <Text style={styles.textAmount}>R$ {invoices.amount}</Text>
            </View>
            <Text style={styles.textRecipient}>{invoices.recipient}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "green",
  },

  boxTickets: {
    borderRadius: 10,
    borderWidth: 2,
    width: "80%",
    height: 90,
    borderColor: "#5882FA",
    padding: 5,
    //backgroundColor: "grey",
    marginBottom: 20,
  },
  textDate: {
    fontSize: 20,
  },
  textAmount: {
    fontSize: 20,
    marginLeft: 100,
  },

  textRecipient: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FF4000",
    marginTop: 15,
  },
});
