import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { API } from "../../Services/API/Api";
import { commonStyles } from "../../Styles/CommonStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function BarCode({ navigation }) {
  const [result, setResult] = useState("");
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
 

  const getPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    console.log(status);
    setHasPermission(status === "granted" ? true : false);
  };

  useEffect(() => {
    getResult();
  }, []);

  function openCamera() {
    setScanned(false);
    getPermission();
  }

  const getResult = async () => {
    const value = await AsyncStorage.getItem("@pay_gamentos:id_login");
    setResult(JSON.parse(value));
    console.log(result);
  };

  function getVerification({ data }) {
    fetch(API + "/debts/" + data)
      .then(async (response) => {
        const data = await response.json();
        navigation.navigate("DetailsTickets", {
          debts: {
            id: data.id,
            recipient: data.recipient,
            amount: data.amount,
            user_id: result.id      
          },
        });
        console.log(data);
      })
      .catch(() => alert("Boleto não encontrado"));
    setScanned(true);
  }

  
  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <StatusBar backgroundColor="#F2295F" />

      <View style={commonStyles.container}>

      <Text style={commonStyles.title}>Olá, {result.fullname}</Text>

        {hasPermission === false && <Text>Permissão para câmera negada</Text>}

        {hasPermission === true && scanned === false && (
          <BarCodeScanner
            onBarCodeScanned={getVerification}
            style={{
              width: Dimensions.get("screen").width * 0.9,
              height: Dimensions.get("screen").height * 0.6,
            }}
          />
        )}
        <TouchableOpacity
          style={{...commonStyles.buttonInitial, marginTop: Dimensions.get("screen").width * 1.3}}
          onPress={openCamera}
        >
          <Text style={commonStyles.buttonText}>Scan BarCode</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
