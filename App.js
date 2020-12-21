import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StateProvider, useStateValue } from "./StateProvider";
import HomeScreen from "./Screens/HomeScreen";
import HistoryScreen from "./Screens/HistoryScreen";
import reducer, { initialState } from "./reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="History"
            component={HistoryScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}
