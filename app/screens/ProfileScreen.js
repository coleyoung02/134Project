import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import AllergenButton from "../components/AllergenButton";

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text>Profile</Text>
      <Text>Dietary Restrictions</Text>
      <AllergenButton title={"Vegetarian"}></AllergenButton>
      <AllergenButton title={"Vegan"}></AllergenButton>
      <AllergenButton title={"Halal"}></AllergenButton>
      <AllergenButton title={"Kosher"}></AllergenButton>
      <AllergenButton title={"Nuts"}></AllergenButton>
      <AllergenButton title={"Soy"}></AllergenButton>
      <AllergenButton title={"Dairy"}></AllergenButton>
      <AllergenButton title={"Fish"}></AllergenButton>
      <AllergenButton title={"Egg"}></AllergenButton>
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
