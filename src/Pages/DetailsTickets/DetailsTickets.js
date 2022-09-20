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

export default function DetailsTickets({ navigation, route }) {
  const [cashback, setCashback] = useState ('')

  const { debts } = route.params;
  console.log(route.params);

  function savedTickets() {
    fetch(API + "/invoices", {
      body: JSON.stringify({
        recipient: debts.recipient,
        amount: debts.amount,
        date: debts.date,
        code: debts.id,
        user_id: debts.user_id,
        cashback: debts.cashback,
      }),
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(() => {
        alert("Boleto pago com sucesso!");
        navigation.navigate ('Tickets')
      })
      .catch(() => alert("possivel erro"));
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#5882FA" />
      <View>
        <Text>Para</Text>
        <Text>{debts.recipient}</Text>

        <Text>Valor</Text>
        <Text>R$ {debts.amount}</Text>

        <Text>Código do boleto</Text>
        <Text>{debts.id}</Text>

        <Text>Cashback</Text>
        <TextInput
        //value={cashback}
        //onChangeText={setCashback}
        >
        <Text>R$ {debts.amount * 0.1}</Text>
        </TextInput>
        

        <View>
          <TouchableOpacity
            style={commonStyles.buttonInitial}
            onPress={savedTickets}
          >
            <Text style={commonStyles.buttonText}>Pagar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={commonStyles.buttonInitial}>
            <Text style={commonStyles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
