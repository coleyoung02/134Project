import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text>Home</Text>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = {
  container: {
    flex: 1,
    paddingTop: "15%",
    paddingHorizontal: "5%",
  },
};
