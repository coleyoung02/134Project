import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const BookmarkScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text>Bookmarks</Text>
    </ScrollView>
  );
};

export default BookmarkScreen;

const styles = {
  container: {
    flex: 1,
    paddingTop: "15%",
    paddingHorizontal: "5%",
  },
};
