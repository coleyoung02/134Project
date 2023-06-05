import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ResultScreen from "./screens/ResultScreen";
import SearchScreen from "./screens/SearchScreen";

const Stack = createStackNavigator();

const SearchResultRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
};

export { SearchResultRoute };
