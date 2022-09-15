import { Text, View, SafeAreaView, StatusBar } from "react-native";
import { commonStyles } from "../../Styles/CommonStyles";

export default function BarCode() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#5882FA" />
      <View>
        <Text style={commonStyles.title}>OLÁ, JUNIOR</Text>
      </View>
    </SafeAreaView>
  );
}
