import React, { useState } from "react";
import {
  Pressable,
  Text,
  View,
  ScrollView,
  TextInput,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import {
  JosefinSans_400Regular,
  JosefinSans_600SemiBold,
} from "@expo-google-fonts/josefin-sans";
import { themeColors } from "../styles";
import { searchCategories, icons } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";

const SearchScreen = ({ navigation }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_600SemiBold,
  });

  /* renders the horizontal scrolling sections
    that show search categories */
  const renderSearchCategories = () => {
    return (
      <>
        {Object.keys(searchCategories).map((key) => (
          <View key={key} style={{ ...styles.searchSection, ...styles.shadow }}>
            <Text style={{ ...styles.text, fontSize: 20, marginBottom: 10 }}>
              {searchCategories[key].category}
            </Text>

            <View style={styles.scrollSection}>
              <MaterialIcons name="arrow-left" size={24} color="black" />
              <ScrollView horizontal={true}>
                {searchCategories[key].values.map((category) => (
                  <Pressable
                    key={category}
                    style={{
                      ...styles.searchCategoryCard,
                      backgroundColor: selectedFilters.includes(category)
                        ? themeColors.accentRed
                        : themeColors.accentLight,
                    }}
                    onPress={() => {
                      if (!selectedFilters.includes(category)) {
                        setSelectedFilters((prev) => [...prev, category]);
                        console.log(selectedFilters);
                      } else {
                        setSelectedFilters((prev) =>
                          prev.filter((item) => item !== category)
                        );
                      }
                      console.log(selectedFilters);
                    }}
                  >
                    {icons[category] ? (
                      <>
                        {selectedFilters.includes(category)
                          ? icons[category].icon["light-24"]
                          : icons[category].icon["dark-24"]}
                        <Text
                          style={{
                            ...styles.text,
                            fontSize: 14,
                            marginTop: 3,
                            color: selectedFilters.includes(category)
                              ? themeColors.accentLight
                              : "black",
                          }}
                        >
                          {category}
                        </Text>
                      </>
                    ) : (
                      <Text
                        style={{
                          ...styles.text,
                          fontSize: 18,
                          color: selectedFilters.includes(category)
                            ? themeColors.accentLight
                            : "black",
                        }}
                      >
                        {category}
                      </Text>
                    )}
                  </Pressable>
                ))}
              </ScrollView>
              <MaterialIcons name="arrow-right" size={24} color="black" />
            </View>
          </View>
        ))}
      </>
    );
  };

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={{ ...styles.searchBox, ...styles.shadow }}>
          <TextInput
            placeholder="Search..."
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={(newText) => {
              setSearchInput(newText);
              console.log(searchInput);
            }}
            style={{
              fontFamily: "JosefinSans_400Regular",
              fontSize: 18,
              padding: 1,
            }}
          ></TextInput>
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: 10,
          }}
        >
          {selectedFilters.map((filter) => (
            <View key={`selected-tag-${filter}`} style={styles.tag}>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,
                  color: themeColors.accentLight,
                }}
              >
                {icons[filter] ? icons[filter].icon["light-18"] : filter}
              </Text>
            </View>
          ))}
        </View>

        {renderSearchCategories()}

        <View style={styles.searchButton}>
          <Pressable
            onPress={() => {
              navigation.navigate("ResultScreen", {
                search: searchInput,
                filters: selectedFilters,
              });
            }}
          >
            <Text
              style={{
                ...styles.text,
                fontSize: 20,
                color: themeColors.accentLight,
              }}
            >
              Search
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = {
  container: {
    opacity: 0.75,
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
    height: 45,
  },
  searchSection: {
    paddingVertical: 15,
    backgroundColor: themeColors.lightBeige,
    borderRadius: 15,
    display: "flex",
    flexDirection: "col",
    marginBottom: 15,
  },
  scrollSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  text: {
    fontFamily: "JosefinSans_600SemiBold",
    textAlign: "center",
  },
  searchCategoryCard: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor: themeColors.accentRed,
    borderWidth: 2,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  searchButton: {
    paddingVertical: 12,
    backgroundColor: themeColors.accentRed,
    borderRadius: 15,
    borderColor: themeColors.accentLight,
    borderWidth: 2.5,
  },
  tag: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: themeColors.accentRed,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 3,
    borderColor: themeColors.accentLight,
    borderWidth: 2,
    textAlign: "center",
    alignItems: "center",
    height: 35,
  },
  shadow: {
    shadowColor: themeColors.shadowGreen,
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
};
