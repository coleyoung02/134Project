import React, { useState } from "react";
import {StyleSheet, TextInput, View, ScrollView, Text} from "react-native";
import { Feather } from "@expo/vector-icons";
import { restaurants } from "../constants";
import { themeColors } from "../styles";
import { useFonts } from "expo-font";

const SearchBar = () => {
  let {searchContainer, iconStyle, searchInput, resultsContainer, resultItem, separator} = styles 
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  

  const searchRestaurants = (query) => {
    setSearchQuery(query);

    const matchedRestaurants = Object.values(restaurants).filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(matchedRestaurants);
  };
  return (
      <View>
        <View style={searchContainer}>
          <Feather
            name="search"
            size={20}
            color="black"
            style={iconStyle}
          />
          <TextInput
            placeholder="Search..."
            style={searchInput}
            value={searchQuery}
            onChangeText={searchRestaurants}
          />
        </View>
        {searchQuery.length > 0 && (
          <ScrollView style={resultsContainer}>
            {results.map((restaurant, index) => (
              <View key={index} style={resultItem}>
                <Text>{restaurant.name}</Text>
                <View style={separator} />
              </View>
            ))}
          </ScrollView>
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    backgroundColor: themeColors.lightBeige,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  iconStyle: {
    alignSelf: "center",
  },
  resultsContainer: {
    paddingLeft: 30,
    paddingTop: 10,
    backgroundColor: themeColors.lightBeige,
    borderColor: "black",
    width: "95%",
    maxHeight: 150,
    borderRadius: 10,
    left: 10,
  },
  resultItem: {
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 10,
  },
});

export default SearchBar;
