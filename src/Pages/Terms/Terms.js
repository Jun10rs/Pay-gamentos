import { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Switch,
} from "react-native";

import { commonStyles } from "../../Styles/CommonStyles";

export default function Terms({navigation}) {

  function returnBillings () {
    navigation.navigate ('Billings')
  }


  const [enabled, setEnabled] = useState(false);
  const toggleSwitch = () => setEnabled((previousState) => !previousState);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#5882FA" />

      <ScrollView>
        <View style={commonStyles.container}>
          <Text style={commonStyles.title}>Termos</Text>

          <Text style={styles.terms}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>

          <Text style={styles.terms}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>

          <Text style={styles.terms}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>

          <Text style={styles.terms}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>

          <View style={styles.checkbox}>
            <Switch
              trackColor={{ false: "#767577", true: "#5882FA" }}
              thumbColor={enabled ? "#FFDE59" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={enabled}
              
            />
            <Text style={{color:'#5882FA', fontSize: 20, marginLeft: 10}}>Aceito os termos</Text>
          </View>

          <View style={commonStyles.boxButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={returnBillings}
            >
              <Text style={commonStyles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              //onPress={navigateTerms}
            >
              <Text style={commonStyles.buttonText}
              //onPress={navigateTabs}
              >Finalizar</Text>
            </TouchableOpacity>
          </View>

          <TextInput />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  terms: {
    fontSize: 14,
    textAlign: "justify",
    marginHorizontal: 20,
    marginVertical: 20,
  },

  checkbox:{
    flexDirection:'row',
    alignItems:'center'
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
