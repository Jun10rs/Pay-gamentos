import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useState } from "react";
//import { API } from "../API/Api";

import { Calendar } from "react-native-calendars";
import { commonStyles } from "../../Styles/CommonStyles";

import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export default function Billings({ navigation, route }) {
  const { user, address } = route.params;
  console.log(route.params);

  const dataAtual = format(new Date(), "yyy-MM-dd");
  //console.log (dataAtual)

  const [date, setDate] = useState(dataAtual);

  function returnAddress() {
    navigation.navigate("Address");
  }

  function navigateTerms() {
    navigation.navigate("Terms", {
      user: user,
      address: address, 
      billings: {
        date: date,
      }
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#5882FA" />

      <View style={styles.container}>
        <Text style={commonStyles.title}>Qual a data da Cobrança?</Text>

        <Calendar
          style={styles.calendar}
          markedDates={{
            [date]: {
              selected: true,
              marked: true,
              selectedColor: "#FFF",
              dotColor: "red",
            },
          }}
          onDayPress={(currentDate) => setDate(currentDate.dateString)}
          theme={{
            selectedDayTextColor: "black",
            todayTextColor: "#FFF",
            calendarBackground: "#FFDE59",
            dayTextColor: "black",
            arrowColor: "#FFF",
            monthTextColor: "black",
          }}
        />
        <Text>
          {format(parseISO(date), "dd 'de' MMMM 'de' yyyy", {
            locale: ptBR,
          })}
        </Text>

        <View style={commonStyles.boxButton}>
          <TouchableOpacity style={styles.button} onPress={returnAddress}>
            <Text style={commonStyles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={navigateTerms}>
            <Text style={commonStyles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  calendar: {
    backgroundColor: "#819FF7",
    borderRadius: 10,
    marginVertical: 30,
    width: Dimensions.get("screen").width * 0.8,
    marginBottom: 200,
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
});
