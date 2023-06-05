import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  JosefinSans_400Regular,
  JosefinSans_600SemiBold,
} from "@expo-google-fonts/josefin-sans";
import {
  Keyboard,
  View,
  TextInput,
  ScrollView,
  Text,
  Pressable,
} from "react-native";
import Triangle from "../components/Triangle";
import { restaurants } from "../constants";
import { themeColors } from "../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ResultScreen = ({ navigation }) => {
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
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
          <View style={{ marginLeft: 10, flexDirection: "row" }}>
            <Text style={{ ...styles.text, marginTop: 6 }}>Sort Results </Text>
            <MaterialCommunityIcons
              name="vector-triangle"
              size={24}
              color={themeColors.accentLight}
            />
          </View>
          <Triangle results={restaurants} />
        </View>
      </View>
    </ScrollView>
  );
};
export default ResultScreen;

const styles = {
  container: {
    opacity: 0.65,
    backgroundColor: themeColors.greenBg,
    fontFamily: "JosefinSans_400Regular",
  },
  content: {
    paddingTop: "15%",
    paddingBottom: "25%",
    paddingHorizontal: "3%",
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
  text: {
    fontFamily: "JosefinSans_600SemiBold",
    color: themeColors.accentLight,
    fontSize: 16,
  },
};
