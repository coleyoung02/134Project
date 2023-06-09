import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.login}>
        <Pressable>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.register}>
        <Pressable>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2E8CF",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#386641',
    borderWidth: 3,
    borderColor: '#2e5436',
    borderRadius: 15,
    padding: "3%",
    margin: 2,
    width: "65%"
  },
  register: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#6A994E',
    borderWidth: 3,
    borderColor: '#2e5436',
    borderRadius: 15,
    padding: "3%",
    margin: 2,
    width: "65%"
  },
  buttonText: {
    color: "#F2E8CF",
    fontSize: 17
  }
});
