import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
  } from "react-native";
  
  export default function ScanCode() {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor="#5882FA" />
        <View>
          <Text>Para</Text>
          <Text>"recebedor"</Text>
  
          <Text>Valor</Text>
          <Text>R$ 00,00</Text>
  
          <Text>Código do boleto</Text>
          <Text>82630000000401310850000000000106860022204000</Text>
  
          <Text>Cashback</Text>
          <Text>R$ 00,00</Text>
  
          <View>
            <TouchableOpacity>
              <Text>Pagar</Text>
            </TouchableOpacity>
  
            <TouchableOpacity>
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  