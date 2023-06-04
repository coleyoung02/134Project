import React, { useState } from "react";
import { useFonts } from "expo-font";
import { JosefinSans_400Regular } from "@expo-google-fonts/josefin-sans";
import {
  Keyboard,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import Triangle from "../components/Triangle";
import { restaurants } from "../constants";
import { themeColors } from "../styles";

const ResultScreen = ({ navigation }) => {
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search"
            onSubmitEditing={Keyboard.dismiss}
            style={{
              fontFamily: "JosefinSans_400Regular",
              fontSize: 18,
              padding: 1,
            }}
          ></TextInput>
        </View>
        <View>
          <Triangle results={restaurants} />
        </View>
      </View>
    </ScrollView>
  );
};
export default ResultScreen;

const styles = StyleSheet.create({
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
  searchBox: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 2.5,
    borderColor: themeColors.borderDark,
    backgroundColor: themeColors.accentLight,
    marginTop: 5,
    marginBottom: 10,
    fontFamily: "JosefinSans_400Regular",
    shadowColor: themeColors.shadowGreen,
    shadowOpacity: 0.7,
    shadowRadius: 10,
    height: 42,
  },
});
