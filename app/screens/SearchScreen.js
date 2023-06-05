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
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView style={styles.container}>
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

      <View
        style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}
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
              {filter}
            </Text>
          </View>
        ))}
      </View>

      {Object.keys(searchCategories).map((key) => (
        <View key={key} style={styles.searchSection}>
          <Text style={{ ...styles.text, fontSize: 20, marginBottom: 10 }}>
            {searchCategories[key].category}
          </Text>

          <View style={styles.scrollSection}>
            <MaterialIcons name="arrow-left" size={24} color="black" />
            <ScrollView horizontal={true}>
              {searchCategories[key].values.map((category) => (
                <Pressable
                  key={category}
                  style={styles.searchCategoryCard}
                  onPress={() => {
                    if (!selectedFilters.includes(category)) {
                      setSelectedFilters((prev) => [...prev, category]);
                    } else {
                      setSelectedFilters((prev) =>
                        prev.filter((item) => item !== category)
                      );
                    }
                  }}
                >
                  {icons[category] ? (
                    <>
                      {icons[category].icon}
                      <Text
                        style={{ ...styles.text, fontSize: 14, marginTop: 3 }}
                      >
                        {category}
                      </Text>
                    </>
                  ) : (
                    <Text style={{ ...styles.text, fontSize: 18 }}>
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

      <View style={styles.searchButton}>
        <Pressable>
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
    </ScrollView>
  );
};

export default SearchScreen;

const styles = {
  container: {
    paddingTop: "15%",
    paddingBottom: "25%",
    paddingHorizontal: "3%",
    opacity: 0.65,
    backgroundColor: themeColors.greenBg,
    fontFamily: "JosefinSans_400Regular",
  },
  searchBox: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 2.5,
    borderColor: themeColors.borderDark,
    backgroundColor: themeColors.accentLight,
    marginTop: 5,
    marginBottom: 15,
    fontFamily: "JosefinSans_400Regular",
    shadowColor: themeColors.shadowGreen,
    shadowOpacity: 0.7,
    shadowRadius: 10,
    height: 42,
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
    backgroundColor: themeColors.accentLight,
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
    borderRadius: 10,
    backgroundColor: themeColors.accentRed,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 3,
    borderColor: themeColors.accentLight,
    borderWidth: 1,
  },
};
