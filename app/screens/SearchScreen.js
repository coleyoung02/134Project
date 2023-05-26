import React from "react";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import Triangle from "../components/Triangle";

const width = 100;
const height = 173;

const SearchScreen = ({ navigation }) => {
  let f = 0;
  return (
    <ScrollView style={styles.container}>
      <Text>Search</Text>
      <Triangle></Triangle>
    </ScrollView>
  );
};


export default SearchScreen;

const styles = {
  container: {
    flex: 1,
    paddingTop: "15%",
    paddingBottom: "25%",
    paddingHorizontal: "3%",
    opacity: 0.65,
    backgroundColor: "#6a994a",
    alignContent: "flex-start",
    fontFamily: "JosefinSans_400Regular",
  }
};
