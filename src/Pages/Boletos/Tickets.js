import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { commonStyles } from "../../Styles/CommonStyles";
import { API } from "../../Services/API/Api";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

// const [amount, setAmount] = useState("");
// const [date, setDate] = useState("");
// const [recipient, setRecipient] = useState("");

export default function Tickets() {
  
  const telaFocada = useIsFocused();

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    if (telaFocada === true) {
      getTickets();
    }
  }, []);

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
      <Text style={commonStyles.title}>Boletos Pagos</Text>

      <View style={styles.container}>
        {invoices.map((invoices, id) => (
          <View style={styles.boxTickets} key={id}>
            <Text style={styles.textDate}>{invoices.date}</Text>
            <Text style={styles.textAmount}>R$ {invoices.amount}</Text>

            <Text style={styles.textRecipient}>{invoices.recipient}</Text>
            <Ionicons
              name="md-checkmark-done"
              size={26}
              color="green"
              style={styles.icon}
            />
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
    width: "90%",
    marginLeft: 20,
    //flex: 1
  },

  boxTickets: {
    borderRadius: 10,
    borderWidth: 2,
    width: "90%",
    height: 90,
    borderColor: "#5882FA",
    padding: 5,
    //backgroundColor: "grey",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  textDate: {
    fontSize: 18,
  },
  textAmount: {
    fontSize: 20,
    marginLeft: 100,
    fontWeight: "bold",
    //backgroundColor: 'pink'
  },

  textRecipient: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF4000",
    marginTop: 15,
    //backgroundColor: "grey",
  },
  icon: {
    marginTop: 20,
    marginStart: 40,
  },
});
