import { React, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { JosefinSans_600SemiBold } from "@expo-google-fonts/josefin-sans";
import GLOBAL from "../UserData.js";
import ResultCard from "../components/ResultCard";
import { restaurants } from "../constants";
import { themeColors } from "../styles";

const width = 100;
const height = 173;

const Triangle = ({ results }) => {
  let [fontsLoaded] = useFonts({
    JosefinSans_600SemiBold,
  });
  const [cost, setCost] = useState(0);
  const [distance, setDistance] = useState(0);
  const [rating, setRating] = useState(1);
  const [dotY, setDotY] = useState(163);
  const [dotX, setDotX] = useState(85);

  function getSortFunction(costVal, distVal, ratingVal) {
    return (a, b) => {
      //ideally values that we are dividing by should not be hard coded but there is a deadine coming up...
      //we divide to normalize scores between zero and one
      //we have a-b for the first 2 only because we want lowest distance and cost but highest rating
      return (
        ((restaurants[a].distance - restaurants[b].distance) / 4.5) * distVal +
        ((restaurants[a].cost - restaurants[b].cost) / 4) * costVal +
        ((restaurants[b].rating - restaurants[a].rating) / 5) * ratingVal
      );
    };
  }

  //formula for distance from a point (x0, y0) to a line defined by 2 points
  function pointDistance(x1, y1, x2, y2, x0, y0) {
    //x1, x2, y1, y1 will likely always be one of 2 things and could be precomputed for better performance
    return (
      Math.abs((x2 - x1) * (y1 - y0) - (x1 - x0) * (y2 - y1)) /
      ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
    );
  }

  function percent(float) {
    return Math.round(float * 100) + "%";
  }

  function isSafe(restaurant) {
    //console.log(restaurant);
    let aller = restaurants[restaurant].safeRestrictions;
    //console.log(aller);
    return GLOBAL.allergens.every((a) => aller.includes(a));
  }

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <View style={styles.triangleHolder}>
        <View style={styles.labelContainer}>
          <Text style={styles.textField}>Cost {percent(cost)}</Text>
        </View>
        <Pressable
          onPressIn={(nativeEvent) => {
            let x = nativeEvent.nativeEvent.locationX;
            let y = Math.min(nativeEvent.nativeEvent.locationY, height);
            if (x < 110 && x > 90 && y < 3) {
              x = 100;
              y = 0;
            }
            let clampedX = Math.min(200, Math.max(0, x));
            let clampedY = Math.max(
              -(height / width) * clampedX + height,
              Math.max(y, (height / width) * clampedX - height)
            );
            let c = 173 - clampedY;
            let d = pointDistance(
              width,
              0,
              width * 2,
              height,
              clampedX,
              clampedY
            );
            let r = pointDistance(0, height, width, 0, clampedX, clampedY);
            let sum = c + d + r;
            setCost(c / sum);
            setDistance(d / sum);
            setRating(r / sum);
            setDotX(clampedX - width - 5);
            setDotY(clampedY - 5);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
            },
            styles.triangle,
          ]}
        >
          <View style={[styles.circle, { top: dotY, left: dotX }]}></View>
        </Pressable>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
          paddingHorizontal: 5,
        }}
      >
        <View style={styles.labelContainer}>
          <Text style={styles.textField}>Distance {percent(distance)}</Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={[styles.textField, { textAlign: "right" }]}>
            Rating {percent(rating)}
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        {Object.keys(results)
          .filter(isSafe)
          .sort(getSortFunction(cost, distance, rating))
          .map((restaurantName, i) => (
            <ResultCard restaurantInfo={restaurants[restaurantName]} key={i} />
          ))}
      </View>
    </View>
  );
};

export default Triangle;

const styles = {
  labelContainer: {
    backgroundColor: themeColors.lightBeige,
    borderRadius: 10,
    paddingHorizontal: 2,
  },
  textField: {
    fontFamily: "JosefinSans_600SemiBold",
    shadowColor: "#386641",
    margin: 5,
  },
  triangleHolder: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  alignleft: {
    float: "left",
  },
  alignright: {
    float: "right",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: width,
    borderRightWidth: width,
    borderBottomWidth: height,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#1d3522",
    opacity: 1.0,
    marginVertical: 5,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#ffffff",
    position: "absolute",
    margin: 0,
    paddingHorizontal: 0,
    paddingTop: 0,
  },
};
