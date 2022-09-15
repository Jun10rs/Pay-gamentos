import {
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

import { commonStyles } from "../../Styles/CommonStyles";

export default function Account({navigation}) {

    function navigateInitial (){
        navigation.navigate ('Initial')
    }

    function navigateAdress () {
        navigation.navigate ('Adress')
    }


  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor="#5882FA" />

      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>NOVA CONTA</Text>

          <Text style={styles.inputText}>Nome completo</Text>
          <TextInput 
          style={commonStyles.input} 
          selectionColor="#5882FA"
          maxLength={120} 
          />

          <Text style={styles.inputText}>Telefone</Text>
          <TextInput 
          style={commonStyles.input} 
          selectionColor="#5882FA"
          keyboardType="phone-pad"
          />

          <Text style={styles.inputText}>Email</Text>
          <TextInput 
          style={commonStyles.input} 
          selectionColor="#5882FA"
          keyboardType="email-address"
          />

          <Text style={styles.inputText}>Nº do RG</Text>
          <TextInput 
          style={commonStyles.input} 
          selectionColor="#5882FA" 
          keyboardType="decimal-pad"
          />

          <Text style={styles.inputText}>CPF</Text>
          <TextInput 
          style={commonStyles.input} 
          selectionColor="#5882FA" 
          keyboardType="numeric"
          maxLength={11}
          />

          <Text style={styles.inputText}>Password</Text>
          <TextInput 
          style={commonStyles.input} 
          selectionColor="#5882FA"
          maxLength={16}
          secureTextEntry
          
          />

          <View style={styles.boxButton}>
            <TouchableOpacity style={styles.button}
            onPress={navigateInitial}
            >
              <Text style={commonStyles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={navigateAdress}
            >
              <Text style={commonStyles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: "center",
  },

  inputText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:42,
    marginBottom: 5,
    color: '#585858',
    alignSelf:'flex-start'
  },

  title: {
    fontSize: 30,
    color: "#5882FA",
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 20,
  },

  boxButton: {
    flexDirection: "row",
    width: "80%",
    //backgroundColor: 'red',
    justifyContent: "space-between",
  },

  button: {
    width: "45%",
    height: 50,
    backgroundColor: "#5882FA",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
  },
});
