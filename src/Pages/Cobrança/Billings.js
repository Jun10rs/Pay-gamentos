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

import { Calendar } from "react-native-calendars";
import { commonStyles } from "../../Styles/CommonStyles";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export default function Billings({ navigation, route }) {

  const { user, address } = route.params;
  console.log(route.params);

  const dataAtual = format(new Date(), "yyy-MM-dd", {locale: ptBR});
 
  const [date, setDate] = useState(dataAtual);
  
  function returnAddress() {
    navigation.goBack();
  }

  function navigateTerms() {
      navigation.navigate("Terms", {
        user: user,
        address: address, 
        billings: {
          date
        }
      })    
  }

  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <StatusBar backgroundColor="#F2295F" />

      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>Qual a data da Cobrança?</Text>

        <Calendar
          style={styles.calendar}
          markedDates={{
            [date]: {
              selected: true,
              marked: true,
              selectedColor: "#FFF",
              dotColor: "#F2295F",
            },
          }}
          onDayPress={(currentDate) => setDate(currentDate.dateString)}
          theme={{
            
            selectedDayTextColor: "black",
            todayTextColor: "#FFF",
            calendarBackground: "#16F28B",
            dayTextColor: "black",
            arrowColor: "#FFF",
            monthTextColor: "#15BF81",
          }}
        />

        <View style={commonStyles.boxButton}>
          <TouchableOpacity style={commonStyles.buttonForm} onPress={returnAddress}>
            <Text style={commonStyles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={commonStyles.buttonForm} onPress={navigateTerms}>
            <Text style={commonStyles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  calendar: {
    backgroundColor: "#131426",
    marginTop: 30,
    width: Dimensions.get("screen").width * 0.8,
    marginBottom: 200,
  },

});
