import React from "react";
import { StyleSheet, Text, Image, View, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import { JosefinSans_400Regular, JosefinSans_600SemiBold,} from "@expo-google-fonts/josefin-sans";
import { useFonts } from "expo-font";
//import { SearchBar } from "react-native-screens";
//Import Component
import SearchBar from "../components/SearchBar";
import { restaurants } from "../constants/index";
import { themeColors } from "../styles";

const HomeScreen = ({ navigation }) => {
  let {container, titleText, resTitle,viewResInfo, resType, foodType, resCardImg, recentSearchRes, restaurantCardView, resCard, starIcon,homeScrollViewContainer, resRating } = styles
  const renderStarRating = (rating) => {
    const starCount = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      if (i <= starCount) {
        stars.push(<Text key={i} style={starIcon}>⭐</Text>);
      } else if (halfStar && i === starCount + 1) {
        stars.push(<Text key={i} style={starIcon}>⭐</Text>);
      } else {
        stars.push(<Text key={i} style={starIcon}>☆</Text>);
      }
    }
  
    return stars;
  };

//   const [fontsLoaded] = useFonts({
//     JosefinSans_400Regular,
//   });
  
//   if (!fontsLoaded) {
//     return null;
//   }

  return (
    <SafeAreaView style={container}>
      <Text style = {titleText}>Welcome Emily!</Text>
      <SearchBar restaurants={restaurants}/>

      <View>
        <Text style = {recentSearchRes}> Recenty Search Restaurant </Text>
      </View>
      <ScrollView stlye ={homeScrollViewContainer}>
        {Object.values(restaurants).map((restaurant, index) => (
        <View style= {restaurantCardView}>
          <TouchableOpacity style = {resCard}> 
            <View style={styles.resTypeContainer}>
              <Text numberOfLines={1} ellipsizeMode="tail" style = {resType}>{restaurant.cuisines} {" - " }{restaurant.categories.join(", ")}</Text>
              <Text style = {viewResInfo}> More Info</Text>
            </View>
            {/* <Image style={styles.resCardImg} source={{ uri: restaurant.image }} /> */}
            <Image style = {resCardImg} source = {{uri: restaurant.urlLogo[0]}}/>
          
            <Text style = {resTitle}> {restaurant.name} </Text> 
            <Text style = {resRating}>{renderStarRating(3.5)} </Text> 
          
            <Text style = {foodType} numberOfLines={1} > Diet Restrictions:  {restaurant.safeRestrictions.join(", ")} {" "}</Text>
          </TouchableOpacity>
        </View>
        ))}
      </ScrollView>

    </SafeAreaView>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.greenBg,
    fontFamily: "JosefinSans_400Regular",
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: '8%',
    borderColor: 'black',
  },
  recentSearchRes: {
    paddingTop: 10,
    fontSize: 20,
    left: 15,
    fontWeight: "bold",
  },
  restaurantCardView: {
    borderColor: themeColors.shadowGreen,
    height: 300,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center', 
    fontFamily: "JosefinSans_400Regular",
  },
  cardTitle:{
    fontSize:30,
    borderColor: 'black',
    fontFamily: "JosefinSans_400Regular",
  },
  resRating: {
    left: 5,
  },
  viewResInfo: {
    marginLeft: 'auto',
    color: themeColors.gray,
  },
  resTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  resTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  resType: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
  resCard: {
    backgroundColor: themeColors.lightBeige,
    borderRadius: 10,
    width: "100%",
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    alignSelf: 'center',
    padding: 10,
  },
  resCardImg: {
    height: "50%",
    resizeMode: 'contain',
  },
  foodType: {
    flex: 1,
    padding: 5,
    overflow: 'hidden',
  },
});
