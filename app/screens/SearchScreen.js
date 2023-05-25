import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const SearchScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text>Login</Text>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = {
  container: {
    flex: 1,
    paddingTop: "15%",
    paddingHorizontal: "5%",
  },
};
