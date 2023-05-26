import { React, useState } from "react";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import GLOBAL from '../UserData.js'
import ResultCard from "../components/ResultCard";


const width = 100;
const height = 173;

const restaurants = {
    Chipotle: {
      name: "Chipotle",
      distance: 1.5,
      rating: 3.5,
      cost: 2.0,
      cuisines: ["Mexican"],
      categories: ["Fast food", "Bowl"],
      safeRestrictions: ["nuts", "dairy", "vegan", "vegetarian", "soy", "fish"],
      ammenities: ["Apple Pay", "Android Pay", "Mobile Order", "Takeout"],
    },
    Cava: {
      name: "Cava",
      distance: 2.3,
      rating: 3.8,
      cost: 2.0,
      cuisines: ["Mediterranean"],
      categories: ["Fast food", "Bowl"],
      safeRestrictions: ["nuts", "dairy", "vegan", "vegetarian", "soy", "fish"],
      ammenities: ["Apple Pay", "Android Pay", "Mobile Order", "Takeout"],
    },
    HiroNori: {
      name: "HiroNori Craft Ramen",
      distance: 3.1,
      rating: 4.4,
      cost: 3.0,
      cusines: ["Japanese"],
      categories: ["Restaurant", "Ramen"],
      safeRestrictions: ["nuts", "dairy", "vegetarian"],
      ammenities: ["Apple Pay", "Android Pay"],
    },
    HaiDiLao: {
      name: "HaiDiLao HotPot",
      distance: 2.0,
      rating: 3.9,
      cost: 3.0,
      cusines: ["Chinese"],
      categories: ["Restaurant", "Hotpot", "Soup"],
      safeRestrictions: ["nuts", "dairy", "vegetarian", "fish"],
      ammenities: ["Apple Pay", "Android Pay"],
    },
    UniversityClub: {
        name: "University Club",
        distance: 0.1,
        rating: 4.3,
        cost: 4.0,
        cusines: ["American"],
        categories: ["Restaurant"],
        safeRestrictions: ["nuts", "dairy", "vegetarian", "fish", "vegan"],
        ammenities: ["Apple Pay", "Android Pay"],
    },
    Bagels: {
        name: "Einstein Bros. Bagels",
        distance: 0.4,
        rating: 2.1,
        cost: 2.0,
        cusines: ["Bagels"],
        categories: ["Restaurant"],
        safeRestrictions: ["nuts", "dairy", "vegetarian", "fish", "vegan", "kosher"],
        ammenities: ["Apple Pay", "Android Pay"],
    },
    ShariNori: {
      name: "ShariNori",
      distance: 4.1,
      rating: 4.1,
      cost: 3.0,
      cusines: ["Japanese"],
      categories: ["Restaurant", "Sushi"],
      safeRestrictions: ["nuts", "dairy", "vegetarian", "fish"],
      ammenities: ["Apple Pay", "Android Pay"],
    },
    NepCafe: {
      name: "Nep Cafe",
      distance: 4.5,
      rating: 4.6,
      cost: 3.0,
      cusines: ["Vietnamese"],
      categories: ["Cafe", "Breakfast", "Brunch"],
      safeRestrictions: ["nuts", "dairy", "fish"],
      ammenities: ["Apple Pay", "Android Pay", "Takeout"],
    },
    HalalGuys: {
      name: "The Halal Guys",
      distance: 3.7,
      rating: 3.8,
      cost: 2.0,
      cusines: ["Middle Eastern"],
      categories: ["Fast food", "Bowl", "Halal"],
      safeRestrictions: ["nuts", "dairy", "fish", "halal", "soy"],
      ammenities: ["Apple Pay", "Android Pay", "Takeout"],
    },
    TaqueriaAyutlaOaxaca: {
      name: "Taqueria Ayutla Oaxaca",
      distance: 2.2,
      rating: 4.3,
      cost: 2.0,
      cusines: ["Mexican"],
      categories: ["Food truck", "Tacos"],
      safeRestrictions: ["nuts", "dairy", "fish", "soy", "kosher"],
      ammenities: ["Cash only", "Takeout"],
    },
    TacoBell: {
        name: "Taco Bell",
        distance: 0.8,
        rating: 1.2,
        cost: 0.0,
        cusines: ["Mexican?"],
        categories: ["Almost food"],
        safeRestrictions: ["nuts", "vegetarian", "fish", "soy"],
        ammenities: ["Order Online", "Takeout"],
      },
    ElPolloLoco: {
      name: "El Pollo Loco",
      distance: 1.6,
      rating: 3.3,
      cost: 1.0,
      cusines: ["Mexican"],
      categories: ["Fast food", "Chicken"],
      safeRestrictions: ["nuts", "dairy", "fish", "soy"],
      ammenities: ["Apple Pay", "Android Pay", "Mobile order", "Drive thru"],
    },
    RaisingCanes: {
      name: "Raising Canes",
      distance: 1.6,
      rating: 4.0,
      cost: 1.0,
      cusines: ["American"],
      categories: ["Fast food", "Chicken"],
      safeRestrictions: ["nuts", "fish", "soy"],
      ammenities: ["Apple Pay", "Android Pay", "Mobile order", "Drive thru"],
    },
  };

function getSortFunction(costVal, distVal, ratingVal) {
    return (a, b) => {
        //ideally values that we are dividing by should not be hard coded but there is a deadine coming up...
        //we divide to normalize scores between zero and one
        //we have a-b for the first 2 only because we want lowest distance and cost but highest rating
        return (
            (restaurants[a].distance - restaurants[b].distance) / 4.5 * distVal + 
            (restaurants[a].cost - restaurants[b].cost) / 4 * costVal +
            (restaurants[b].rating - restaurants[a].rating) / 5 * ratingVal
        );
    }
}

//formula for distance from a point (x0, y0) to a line defined by 2 points
function pointDistance(x1, y1, x2, y2, x0, y0) {
    //x1, x2, y1, y1 will likely always be one of 2 things and could be precomputed for better performance
    return Math.abs((x2-x1)*(y1-y0) - (x1-x0)*(y2-y1)) / (((x2-x1) ** 2 + (y2-y1) ** 2) ** .5)
}

function percent(float) {
    return Math.round(float * 100) + "%";
}



const Triangle = () => {
    const [cost, setCost] = useState(0);
    const [distance, setDistance] = useState(0);
    const [rating, setRating] = useState(1);
    const [dotY, setDotY] = useState(163);
    const [dotX, setDotX] = useState(85);
    function isSafe(restaurant) {
        console.log(restaurant);
        let aller = restaurants[restaurant].safeRestrictions;
        console.log(aller);
        return GLOBAL.allergens.every(a => aller.includes(a));
    }
    return (
      <View>
        <View style={styles.triangleHolder}>
          <Text style={styles.textField}>Cost = {percent(cost)}</Text>
          <Pressable
            onPressIn={(nativeEvent) => {
              let x = nativeEvent.nativeEvent.locationX;
              let y = Math.min(nativeEvent.nativeEvent.locationY, height);
              if (x < 110 && x > 90 && y < 3) {
                x = 100;
                y = 0;
              }
              let clampedX = Math.min(200,  Math.max(0, x));
              let clampedY = Math.max(-(height / width) * clampedX + height, Math.max(y, (height / width) * clampedX - height));
              let c = 173 - clampedY;
              let d = pointDistance(width, 0, width*2, height, clampedX, clampedY);
              let r = pointDistance(0, height, width, 0, clampedX, clampedY);
              let sum = c + d + r;
              setCost(c / sum);
              setDistance(d / sum);
              setRating(r / sum);
              setDotX(clampedX - width - 5);
              setDotY(clampedY - 5);
            }}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
              styles.triangle,
            ]}>
                <View style={[styles.circle, {top: dotY, left: dotX} ]}>

                </View>
          </Pressable>
          
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.textField}>Distance = {percent(distance)}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={[styles.textField, {textAlign: 'right'}]}>Rating = {percent(rating)}</Text>
          </View>
        </View>
        {Object.keys(restaurants).filter(isSafe).sort(getSortFunction(cost,distance,rating)).map((restaurantName, i) => (
          <ResultCard restaurantInfo={restaurants[restaurantName]} key={i} />
        ))}
        
      </View>
    );
  };
  
  
  export default Triangle;
  
  const styles = {
    container: {
      flex: 1,
      paddingTop: "15%",
      paddingHorizontal: "5%",
    },
    textField: {
        fontFamily: "JosefinSans_400Regular",
        shadowColor: "#386641"
    },
    triangleHolder: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    alignleft: {
      float: 'left'
    },
    alignright: {
      float: 'right'
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
      borderBottomColor: "#386641",
      opacity: 1.0,
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        backgroundColor: "#ffffff",
        position: 'absolute',
        margin: 0,
        paddingHorizontal: 0,
        paddingTop: 0
    }
  };
  

