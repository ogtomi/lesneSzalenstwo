import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TittleTattle(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.content}>{props.content}</Text>
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
