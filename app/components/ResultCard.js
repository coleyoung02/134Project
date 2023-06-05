import React from "react";
import { useFonts } from "expo-font";
import {
  JosefinSans_400Regular,
  JosefinSans_600SemiBold,
} from "@expo-google-fonts/josefin-sans";
import { StyleSheet, Text, View } from "react-native";
import { Fontisto, FontAwesome5, Feather } from "@expo/vector-icons";
import { themeColors } from "../styles";

const ResultCard = ({ restaurantInfo }) => {
  const maxRating = [1, 2, 3, 4, 5];
  const maxCost = [1, 2, 3, 4];

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  const renderStats = () => {
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
              return restaurantInfo.rating % 1 >= 0.5 ? (
                <FontAwesome5
                  name="star-half-alt"
                  size={styles.icon.size}
                  key={i}
                  color={styles.star.color}
                />
              ) : (
                <FontAwesome5
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
              fontFamily: "JosefinSans_600SemiBold",
            }}
          >
            {" "}
            {restaurantInfo.rating}
          </Text>
        </View>

        <View style={{ marginLeft: 20 }}>
          <FontAwesome5
            name="walking"
            size={styles.icon.size}
            color={styles.star.color}
          />
        </View>
        <View style={{ marginTop: 3 }}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "JosefinSans_600SemiBold",
            }}
          >
            {" "}
            {restaurantInfo.distance + "mi"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 20,
            marginLeft: 20,
          }}
        >
          {maxCost.map((cost, i) => {
            if (i < Math.floor(restaurantInfo.cost)) {
              return (
                <Feather
                  name="dollar-sign"
                  size={styles.icon.size}
                  key={i}
                  color={styles.dollar.filled}
                />
              );
            } else if (i >= Math.floor(restaurantInfo.cost)) {
              return (
                <Feather
                  name="dollar-sign"
                  size={styles.icon.size}
                  key={i}
                  color={styles.dollar.empty}
                />
              );
            }
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.resultCard}>
      <View style={{ marginBottom: 5 }}>
        <Text style={styles.cardTitleText}>{restaurantInfo.name}</Text>
      </View>
      <View style={{ marginBottom: 5 }}>{renderStats()}</View>
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
    borderColor: themeColors.borderDark,
    backgroundColor: themeColors.lightBeige,
    margin: 5,
    fontFamily: "JosefinSans_400Regular",
    shadowColor: themeColors.shadowGreen,
    shadowOpacity: 0.7,
    shadowRadius: 10,
    height: 120,
  },
  cardTitleText: {
    fontFamily: "JosefinSans_600SemiBold",
    fontSize: 18,
  },
  icon: {
    size: 16,
  },
  star: {
    color: themeColors.accentRed,
  },
  dollar: {
    filled: themeColors.accentRed,
    empty: themeColors.accentLightRed,
  },
});
