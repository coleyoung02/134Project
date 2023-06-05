import React, { useState } from "react";
import { useFonts } from "expo-font";
import { JosefinSans_400Regular } from "@expo-google-fonts/josefin-sans";
import {
  Keyboard,
  Pressable,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import Triangle from "../components/Triangle";
import { restaurants } from "../constants";
import { themeColors } from "../styles";
import ResultCard from "../components/ResultCard";
import GLOBAL from "../UserData.js";

const BookmarkScreen = ({ navigation }) => {
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const [v, setV] = useState(true);
  const refresh = () => {
    setV(!v);
  };
  
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
          <Pressable onPress={refresh}><Text>Refresh</Text></Pressable>
        </View>
        <View style={{ marginTop: 10 }}>
          {Object.keys(restaurants)
            .filter((i) => GLOBAL.bookmarks.includes(restaurants[i].name))
            .map((restaurantName, i) => (
              <ResultCard restaurantInfo={restaurants[restaurantName]} key={i} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};
export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "15%",
    paddingBottom: "25%",
    paddingHorizontal: "3%",
    opacity: 0.65,
    backgroundColor: "#6a994a",
    alignContent: "flex-start",
    fontFamily: "JosefinSans_400Regular",
  },
  searchBox: {
    flex: 1,
    padding: 10,
    borderRadius: 15,
    borderWidth: 2.5,
    borderColor: "#1d3522",
    backgroundColor: "#fbf7ef",
    margin: 5,
    fontFamily: "JosefinSans_400Regular",
    shadowColor: "#386641",
    shadowOpacity: 0.7,
    shadowRadius: 10,
    height: 43,
  },
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
});
