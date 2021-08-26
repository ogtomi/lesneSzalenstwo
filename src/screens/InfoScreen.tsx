import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informacje</Text>
      <Text style={styles.credits}>
        Autorzy: Krzysztof Jeschke i Tomasz Lewandowski
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
  },
  title: {
    marginTop: 40,
    backgroundColor: "#fff",
    fontSize: 30,
    //alignItems: "center",
    //justifyContent: "center",
  },
  credits: {
    marginTop: 10,
    backgroundColor: "#fff",
    fontSize: 15,
    //alignItems: "center",
    //justifyContent: "center",
  },
});
