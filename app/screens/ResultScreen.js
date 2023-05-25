import React from "react";
import { useState } from "react";
import {
  useFonts,
  JosefinSans_400Regular,
} from "@expo-google-fonts/josefin-sans";
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Fontisto, FontAwesome5 } from "@expo/vector-icons";
import ResultCard from "../components/ResultCard";

const ResultScreen = ({ navigation }) => {
  const restaurants = {
    Chipotle: {
      name: "Chipotle",
      distance: 1.5,
      rating: 3.5,
      cuisines: ["Mexican"],
      categories: ["Fast food", "Bowl"],
      safeRestrictions: ["nuts", "dairy", "vegan", "vegetarian", "soy", "fish"],
      ammenities: ["Apple Pay", "Android Pay", "Mobile Order", "Takeout"],
    },
    Cava: {
      name: "Cava",
      distance: 2.3,
      rating: 3.8,
      cuisines: ["Mediterranean"],
      categories: ["Fast food", "Bowl"],
      safeRestrictions: ["nuts", "dairy", "vegan", "vegetarian", "soy", "fish"],
      ammenities: ["Apple Pay", "Android Pay", "Mobile Order", "Takeout"],
    },
    HiroNori: {
      name: "HiroNori Craft Ramen",
      distance: 3.1,
      rating: 4.4,
      cusines: ["Japanese"],
      categories: ["Restaurant", "Ramen"],
      safeRestrictions: ["nuts", "dairy", "vegetarian"],
      ammenities: ["Apple Pay", "Android Pay"],
    },
    HaiDiLao: {
      name: "HaiDiLao HotPot",
      distance: 2.0,
      rating: 3.9,
      cusines: ["Chinese"],
      categories: ["Restaurant", "Hotpot", "Soup"],
      safeRestrictions: ["nuts", "dairy", "vegetarian", "fish"],
      ammenities: ["Apple Pay", "Android Pay"],
    },
    ShariNori: {
      name: "ShariNori",
      distance: 4.1,
      rating: 4.1,
      cusines: ["Japanese"],
      categories: ["Restaurant", "Sushi"],
      safeRestrictions: ["nuts", "dairy", "vegetarian", "fish"],
      ammenities: ["Apple Pay", "Android Pay"],
    },
    NepCafe: {
      name: "Nep Cafe",
      distance: 4.5,
      rating: 4.6,
      cusines: ["Vietnamese"],
      categories: ["Cafe", "Breakfast", "Brunch"],
      safeRestrictions: ["nuts", "dairy", "fish"],
      ammenities: ["Apple Pay", "Android Pay", "Takeout"],
    },
    HalalGuys: {
      name: "The Halal Guys",
      distance: 3.7,
      rating: 3.8,
      cusines: ["Middle Eastern"],
      categories: ["Fast food", "Bowl", "Halal"],
      safeRestrictions: ["nuts", "dairy", "fish", "halal", "soy"],
      ammenities: ["Apple Pay", "Android Pay", "Takeout"],
    },
    TaqueriaAyutlaOaxaca: {
      name: "Taqueria Ayutla Oaxaca",
      distance: 2.2,
      rating: 4.3,
      cusines: ["Mexican"],
      categories: ["Food truck", "Tacos"],
      safeRestrictions: ["nuts", "dairy", "fish", "soy"],
      ammenities: ["Cash only", "Takeout"],
    },
    ElPolloLoco: {
      name: "El Pollo Loco",
      distance: 1.6,
      rating: 3.3,
      cusines: ["Mexican"],
      categories: ["Fast food", "Chicken"],
      safeRestrictions: ["nuts", "dairy", "fish", "soy"],
      ammenities: ["Apple Pay", "Android Pay", "Mobile order", "Drive thru"],
    },
    RaisingCanes: {
      name: "Raising Canes",
      distance: 1.6,
      rating: 4.0,
      cusines: ["American"],
      categories: ["Fast food", "Chicken"],
      safeRestrictions: ["nuts", "fish", "soy"],
      ammenities: ["Apple Pay", "Android Pay", "Mobile order", "Drive thru"],
    },
  };
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  const renderStars = (restaurantName) => {
    return (
      <View style={{ flexDirection: "row", height: 20 }}>
        <View style={{ flexDirection: "row", height: 20 }}>
          {maxRating.map((rating, i) => {
            if (i < Math.floor(restaurants[restaurantName].rating)) {
              return (
                <Fontisto
                  name="star"
                  size={styles.icon.size}
                  key={i}
                  color={styles.star.color}
                />
              );
            } else if (i === Math.floor(restaurants[restaurantName].rating)) {
              return restaurants[restaurantName].rating % 1 > 0 ? (
                <FontAwesome5
                  name="star-half-alt"
                  size={styles.icon.size}
                  key={i}
                  color={styles.star.color}
                />
              ) : (
                <Fontisto
                  name="star"
                  size={styles.icon.size}
                  key={i}
                  color={styles.star.color}
                />
              );
            } else if (i > Math.floor(restaurants[restaurantName].rating)) {
              return (
                <FontAwesome5
                  name="star"
                  size={styles.icon.size}
                  key={i}
                  color={styles.star.color}
                />
              );
            }
          })}
        </View>
        <View style={{ marginTop: 3 }}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "JosefinSans_400Regular",
            }}
          >
            {" "}
            {restaurants[restaurantName].rating}
          </Text>
        </View>
      </View>
    );
  };

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
        {Object.keys(restaurants).map((restaurantName, i) => (
          <ResultCard restaurantInfo={restaurants[restaurantName]} key={i} />
        ))}
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
