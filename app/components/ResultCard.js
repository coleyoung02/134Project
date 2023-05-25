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

const ResultCard = ({ restaurantInfo }) => {
  const maxRating = [1, 2, 3, 4, 5];

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  const renderStars = () => {
    return (
      <View style={{ flexDirection: "row", height: 20 }}>
        <View style={{ flexDirection: "row", height: 20 }}>
          {maxRating.map((rating, i) => {
            if (i < Math.floor(restaurantInfo.rating)) {
              return (
                <Fontisto
                  name="star"
                  size={styles.icon.size}
                  key={i}
                  color={styles.star.color}
                />
              );
            } else if (i === Math.floor(restaurantInfo.rating)) {
              return restaurantInfo.rating % 1 > 0 ? (
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
            } else if (i > Math.floor(restaurantInfo.rating)) {
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
            {restaurantInfo.rating}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.resultCard}>
      <Text style={styles.cardTitleText}>{restaurantInfo.name}</Text>
      {renderStars()}
    </View>
  );
};

export default ResultCard;

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
});
