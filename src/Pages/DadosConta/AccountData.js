import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { commonStyles } from "../../Styles/CommonStyles";

export default function AccountData() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor="#5882FA" />
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>Dados da conta</Text>

        <Text> Nome: </Text>
        <Text> CPF </Text>
        <Text> Telefone </Text>
        <Text> RG </Text>

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.button}
            //onPress={returnAccount}
          >
            <Text style={commonStyles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

  boxButton: {
    //flexDirection: "row",
    width: "80%",
    alignItems: 'center',
    marginTop: 20,
    //backgroundColor:'red'
  },
});
