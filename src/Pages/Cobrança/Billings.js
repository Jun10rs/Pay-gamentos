import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";

import { Calendar } from "react-native-calendars";
import { commonStyles } from "../../Styles/CommonStyles";

export default function Billings({navigation}) {

    function returnAdress () {
        navigation.navigate ('Adress')
    }

    function navigateTerms () {
        navigation.navigate ('Terms')
    }
  const [date, setDate] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#5882FA" />

      <View style={styles.container}>
        <Text style={commonStyles.title}>Qual a data da Cobrança?</Text>
        
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
              calendarBackground: "#FFDE59",
              dayTextColor: "black",
              arrowColor: "#FFF",
              monthTextColor: "black",
            }}
          />
        

        <View style={commonStyles.boxButton}>
          <TouchableOpacity 
          style={styles.button}
          onPress={returnAdress}
          >
            <Text style={commonStyles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress={navigateTerms}
          >
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
    marginBottom: 200
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
