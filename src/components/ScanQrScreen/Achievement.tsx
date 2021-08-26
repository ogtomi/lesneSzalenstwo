import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Achievement(props) {
  var base64Image = "data:image/png;base64," + props.image;
  return (
    <View style={styles.container}>
      <Image style={{ width: 50, height: 50 }} source={{ uri: base64Image }} />
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
    marginTop: 40,
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
