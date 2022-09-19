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
import { API } from "../../API/Api";
import { commonStyles } from "../../Styles/CommonStyles";

export default function BarCode() {

  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  const getPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    console.log(status);
    setHasPermission(status === "granted" ? true : false);
  };
  // getPermission()

  // useEffect(() => {
  //   ;
  // }, []);

  function getResult({ data}) {
    setScanned(true);
    console.log(data);
    

    // fetch(API + "/invoices", {
    //   body: JSON.stringify({
    //     id: id,
    //   }),
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // })
    //   .then(() => {
    //     alert("code saved");
    //   })
    //   .catch(() => alert("possivel erro"));
  }

  function openCamera() {
    setScanned(false);
    getPermission();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#5882FA" />
      <Text style={commonStyles.title}>OLÁ, JUNIOR</Text>

      <View style={commonStyles.container}>
        {hasPermission === false && <Text>Permissão para câmera negada</Text>}

        {hasPermission === true && scanned === false && (
          <BarCodeScanner
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.code39]}
            onBarCodeScanned={getResult}
            style={{
              width: Dimensions.get("screen").width * 0.8,
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
