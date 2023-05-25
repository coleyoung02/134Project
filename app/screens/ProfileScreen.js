import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text>Profile</Text>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = {
  container: {
    flex: 1,
    paddingTop: "15%",
    paddingHorizontal: "5%",
  },
};
