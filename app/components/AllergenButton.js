import { React, useState } from "react";
import { Text, StyleSheet, CheckBox, Button, View } from "react-native";
import GLOBAL from "../UserData.js";

const AllergenButton = ({ title }) => {
  function clickBox(state) {
    if (isSelected) {
      GLOBAL.allergens.pop(title.toLowerCase());
    } else {
      GLOBAL.allergens.push(title.toLowerCase());
    }
    console.log(GLOBAL.allergens);
    setSelection(state);
  }

  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        value={isSelected}
        onValueChange={clickBox}
        style={styles.checkbox}
      />
      <Text>{title}</Text>
    </View>
  );
};

export default AllergenButton;

const styles = StyleSheet.create({
  resultCard: {
    flex: 1,
    padding: 15,
    borderRadius: 15,
    borderWidth: 2.5,
    borderColor: "#1d3522",
    backgroundColor: "#f2e8cf",
    margin: 5,
    fontFamily: "JosefinSans_400Regular",
    shadowColor: "#386641",
    shadowOpacity: 0.7,
    shadowRadius: 10,
    height: 120,
  },
  cardTitleText: {
    fontFamily: "JosefinSans_400Regular",
    fontSize: 18,
  },
  icon: {
    size: 16,
  },
  star: {
    color: "#883031",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  dollar: {
    filled: "#883031",
    empty: "#d4b4b4",
  },
});
