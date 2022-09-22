import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useState, useEffect } from "react";
import { commonStyles } from "../../Styles/CommonStyles";

export default function AccountData({ navigation }) {
  
  const [result, setResult] = useState("");


  useEffect(() => {
    getResult();
  }, [getResult]);

  const getResult = async () => {
    const value = await AsyncStorage.getItem("@pay_gamentos:id_login");
    setResult(JSON.parse(value));
  };
  console.log(result);

  function exitApp() {
    navigation.navigate("Initial");
  }

  

  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <StatusBar backgroundColor="#F2295F" />
      {result !== '' && (

        <View style={commonStyles.container}>
  
          <Text style={commonStyles.title}>Dados da conta</Text>
        
          <View style={styles.boxData}>
            <Text style={styles.textData}>Nome:  
            <Text style={{color:'#FFF'}}> {result.fullname}</Text>
            </Text>
  
            <Text style={styles.textData}>CPF: 
            <Text style={{color:'#FFF'}}> {result.cpf}</Text>
            </Text>
  
            <Text style={styles.textData}>Telefone: 
            <Text style={{color:'#FFF'}}> {result.phone_number}</Text>
            </Text>
  
            <Text style={styles.textData}>Email: 
            <Text style={{color:'#FFF'}}> {result.email}</Text>
            </Text>
  
            <Text style={styles.textData}>RG: 
            <Text style={{color:'#FFF'}}> {result.number_rg}</Text>
            </Text>
  
            <Text style={styles.textData}>CEP: 
            <Text style={{color:'#FFF'}}> {result.address.cep}</Text>
            </Text>
  
            <Text style={styles.textData}>Rua: 
            <Text style={{color:'#FFF'}}> {result.address.street}</Text>
            </Text>
  
            <Text style={styles.textData}>Nº da Residência:
            <Text style={{color:'#FFF'}}> {result.address.number}</Text>
            </Text>
  
            <Text style={styles.textData}>Bairro: 
            <Text style={{color:'#FFF'}}> {result.address.region}</Text>
            </Text>
  
            <Text style={styles.textData}>Cidade: 
            <Text style={{color:'#FFF'}}> {result.address.city}</Text>
            </Text>
            
            <Text style={styles.textData}>Estado: 
            <Text style={{color:'#FFF'}}> {result.address.state}</Text>
            </Text>
          </View>
  
            <TouchableOpacity 
            style={{...commonStyles.buttonInitial, marginTop: Dimensions.get("screen").width * 0.18}} 
            onPress={exitApp}>
              <Text style={commonStyles.buttonText}>Sair do App</Text>
            </TouchableOpacity>
          
        </View>
      )
      }
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  boxButton: {
    width: "90%",
    alignItems: "center",
    marginTop: 20,
    marginTop: 50
  },

  boxData: {
    marginTop: 30,
    borderRadius: 20,
    borderColor: '#131426',
    borderWidth: 2,
    width: '80%',
    padding: 10,
    backgroundColor: '#168C61'
  },

  textData: {
    fontSize: 20,
    marginBottom: 10,
    color: '#424242',
    fontWeight: 'bold',
    //textDecorationLine:"underline"
  },
});
