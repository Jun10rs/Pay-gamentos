import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { API } from "../../Services/API/Api";
import { commonStyles } from "../../Styles/CommonStyles";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { id } from "date-fns/locale";

export default function BarCode({ navigation }) {
  const [result, setResult] = useState("");
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const telaFocada = useIsFocused("");

  const getPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    console.log(status);
    setHasPermission(status === "granted" ? true : false);
  };

  useEffect(() => {
    if (telaFocada === true) {
      getPermission();
    }
    getResult();
  }, []);

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
            user_id: result.id,
            date: result.billing_day,
          },
        });
        console.log(data);
      })
      .catch(() => alert("Boleto não encontrado"));
    setScanned(true);
    console.log(data);
  }

  function openCamera() {
    setScanned(false);
    getPermission();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#5882FA" />
      <Text style={commonStyles.title}>Olá, {result.fullname}</Text>

      <View style={commonStyles.container}>
        {hasPermission === false && <Text>Permissão para câmera negada</Text>}

        {hasPermission === true && scanned === false && (
          <BarCodeScanner
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.code39]}
            onBarCodeScanned={getVerification}
            style={{
              width: Dimensions.get("screen").width * 0.9,
              height: Dimensions.get("screen").height * 0.6,
            }}
          />
        )}
        <TouchableOpacity
          style={commonStyles.buttonInitial}
          onPress={openCamera}
        >
          <Text style={commonStyles.buttonText}>Scan BarCode</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
