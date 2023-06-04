import React from "react";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { JosefinSans_400Regular } from "@expo-google-fonts/josefin-sans";
import { themeColors } from "../styles";

const SearchScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return <ScrollView style={styles.container}></ScrollView>;
};

export default SearchScreen;

const styles = {
  container: {
    flex: 1,
    paddingTop: "15%",
    paddingBottom: "25%",
    paddingHorizontal: "3%",
    opacity: 0.65,
    backgroundColor: themeColors.greenBg,
    alignContent: "flex-start",
    fontFamily: "JosefinSans_400Regular",
  },
};
