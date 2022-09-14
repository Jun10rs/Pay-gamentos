import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useState, useEffect } from "react";

import { Calendar } from "react-native-calendars";
import { commonStyles } from "../CommonStyles/CommonStyles";

export default function Billings() {
  const [date, setDate] = useState("");

  return (
    <SafeAreaView style={{flex:1}}>

      <View style={styles.container}>
        <StatusBar backgroundColor="#5882FA" />

        <Text style={commonStyles.title}>Cobrança</Text>

        <Calendar
          //minDate={dataAtual}
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
            calendarBackground: "#A9BCF5", // cor do calendario em si
            dayTextColor: "#FFDE59", // cores dos dia
            arrowColor: "#FFF", // cores do avançar e voltar
            monthTextColor: "#FFDE59", // cor do mês selecionado
          }}
        />

        <View style={styles.boxButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={commonStyles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
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
    marginVertical: 20,
  },

  boxButton: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: 'red',
    justifyContent: "space-between",
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
