import React from "react";
import useState from "react";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  JosefinSans_400Regular,
} from "@expo-google-fonts/josefin-sans";
import { Keyboard, StyleSheet, Text, View, TextInput } from "react-native";
import { Iconoir } from "iconoir-react-native";

const ResultScreen = ({ navigation }) => {
  const restaurants = {
    Chipotle: { name: "Chipotle", distance: 1.5, rating: 3.5 },
    Cava: { name: "Cava", distance: 2.3, rating: 3.9 },
  };
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search"
          onSubmitEditing={Keyboard.dismiss}
          style={{ fontFamily: "JosefinSans_400Regular" }}
        ></TextInput>
      </View>
      {Object.keys(restaurants).map((restaurantName, i) => (
        <View style={styles.resultCard} key={i}>
          <Text style={styles.text}>{restaurantName}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "15%",
    paddingHorizontal: "5%",
    backgroundColor: "#F2E8CF",
    alignContent: "flex-start",
    fontFamily: "JosefinSans_400Regular",
  },
  searchBox: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 2.5,
    borderColor: "#2e5436",
    backgroundColor: "white",
    margin: 5,
    fontFamily: "JosefinSans_400Regular",
  },
  resultCard: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "silver",
    backgroundColor: "white",
    margin: 5,
    fontFamily: "JosefinSans_400Regular",
  },
  text: {
    fontFamily: "JosefinSans_400Regular",
  },
});
export default ResultScreen;
