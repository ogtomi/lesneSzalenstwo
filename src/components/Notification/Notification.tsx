import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Notification(props) {
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
    backgroundColor: "rgba(255,255,255,0.8)",
    alignItems: "center",
    //borderWidth: 1,
    borderRadius: 10,
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    //justifyContent: "center",
  },
  title: {
    //marginTop: 40,
    //backgroundColor: backgorundColor,
    fontSize: 20,
    //alignItems: "center",
    //justifyContent: "center",
  },
  content: {
    //marginTop: 10,
    //backgroundColor: backgorundColor,
    fontSize: 14,
    //alignItems: "center",
    //justifyContent: "center",
  },
});
