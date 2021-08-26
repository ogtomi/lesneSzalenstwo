import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const achievURL = require("../../../img/forest-tree.png");

export default function Achievement(props) {
  return (
    <View style={styles.container}>
      <Image style={{ width: 50, height: 50 }} source={achievURL} />
      <Text style={styles.title}>{props.placeName}</Text>
      <Text style={styles.content}>{props.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.4)",
    alignItems: "center",
    //borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    //justifyContent: "center",
  },
  title: {
    marginTop: 20,
    //backgroundColor: backgorundColor,
    fontSize: 30,
    //alignItems: "center",
    //justifyContent: "center",
  },
  content: {
    marginTop: 10,
    //backgroundColor: backgorundColor,
    fontSize: 15,
    //alignItems: "center",
    //justifyContent: "center",
  },
});
