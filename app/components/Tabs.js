import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import BookmarkScreen from "../screens/BookmarkScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ResultScreen from "../screens/ResultScreen";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { themeColors } from "../styles";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tabBar,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome
                name="home"
                style={{
                  color: focused
                    ? themeColors.accentLight
                    : themeColors.lightBeige,
                  shadowOpacity: focused ? 0.5 : 0,
                  ...styles.iconShadow,
                }}
                size={styles.icon.size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={ResultScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome
                name="search"
                style={{
                  color: focused ? "#fbf7ef" : "#f2e8cf",
                  shadowOpacity: focused ? 0.5 : 0,
                  ...styles.iconShadow,
                }}
                size={styles.icon.size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome
                name="heart"
                style={{
                  color: focused ? "#fbf7ef" : "#f2e8cf",
                  shadowOpacity: focused ? 0.5 : 0,
                  ...styles.iconShadow,
                }}
                size={styles.icon.size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome
                name="user"
                style={{
                  color: focused ? "#fbf7ef" : "#f2e8cf",
                  shadowOpacity: focused ? 0.5 : 0,
                  ...styles.iconShadow,
                }}
                size={styles.icon.size}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = {
  tabBar: {
    position: "absolute",
    backgroundColor: "#386641",
    padding: "3%",
  },
  icon: {
    size: 25,
  },
  iconShadow: {
    shadowColor: "#1d3522",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 4,
  },
};
