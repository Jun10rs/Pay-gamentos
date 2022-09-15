import { Text, View, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import { commonStyles } from "../../Styles/CommonStyles";

export default function Tickets() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#5882FA" />
      <View>
        <Text style={commonStyles.title}>Boletos Pagos</Text>
      </View>
      
    </SafeAreaView>
  );
}