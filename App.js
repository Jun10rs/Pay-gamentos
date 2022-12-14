import "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome } from "@expo/vector-icons";

const StackApp = createStackNavigator();
const StackDetail = createStackNavigator();
const Tab = createBottomTabNavigator();

import Initial from "./src/Pages/Home/Initial";
import Login from "./src/Pages/Login/Login";
import Account from "./src/Pages/Cadastro/Account";
import Address from "./src/Pages/Endereço/Address";
import Billings from "./src/Pages/Cobrança/Billings";
import Terms from "./src/Pages/Terms/Terms";
import BarCode from "./src/Pages/BarCode/BarCode";
import Tickets from "./src/Pages/Boletos/Tickets";
import AccountData from "./src/Pages/DadosConta/AccountData";
import DetailsTickets from "./src/Pages/DetailsTickets/DetailsTickets";


function StackTabs() {
  return (
    <StackDetail.Navigator initialRouteName="TabNavigator">
      <StackDetail.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <StackDetail.Screen
        name="DetailsTickets"
        component={DetailsTickets}
        options={{
          headerShown: false,
        }}
      />
    </StackDetail.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="AccountData"
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "blue",
      }}
    >
      <Tab.Screen
        name="BarCode"
        component={BarCode}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarLabel: "Scan Code",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="barcode-scan"
              size={30}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          headerShown: false,
          tabBarLabel: "Boletos Pagos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu-open" size={40} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="AccountData"
        component={AccountData}
        options={{
          headerShown: false,
          tabBarLabel: "Dados Conta",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Initial">
        <StackApp.Screen
          name="StackTabs"
          component={StackTabs}
          options={{
            headerShown: false,
          }}
        />

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

        <StackApp.Screen
          name="Address"
          component={Address}
          options={{
            headerShown: false,
          }}
        />

        <StackApp.Screen
          name="Billings"
          component={Billings}
          options={{
            headerShown: false,
          }}
        />

        <StackApp.Screen
          name="Terms"
          component={Terms}
          options={{
            headerShown: false,
          }}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
