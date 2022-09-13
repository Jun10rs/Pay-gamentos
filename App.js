import "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Initial from "./src/pages/Home/Initial";
import Login from "./src/pages/Login/Login";
import Account from './src/pages/Cadastro/Account'

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Initial">
        <StackApp.Screen
          name="Initial"
          component={Initial}
          options={{
            headerShown: false,
          }}
        />

        <StackApp.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <StackApp.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
          }}
        />

        
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
