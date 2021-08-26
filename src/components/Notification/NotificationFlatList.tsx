import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { Modal } from "react-native";
import { Dimensions } from "react-native";
import {
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Notification from "./Notification";

const DATA = [
  {
    id: "1",
    title: "Alert 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "2",
    title: "Alert 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "3",
    title: "Alert 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "4",
    title: "Alert 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export default function NotificationFlatList(props) {
  const [showFull, setShowFull] = useState(false);
  return (
    <View
      style={{ backgroundColor: "rgba(255,255,255,0.8)", paddingVertical: 10 }}
    >
      {/* <View style={styles.container}>
        <Text style={styles.title}>Czy wiesz, że?</Text> */}
      <FlatList
        style={styles.container}
        data={DATA}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() =>
                props.history.push({
                  pathname: "/NotificationScreen",
                  title: item.title,
                  content: item.content,
                })
              }
            >
              <Notification
                title={item.title}
                content={item.content}
              ></Notification>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 3,
    //flex: 1,

    backgroundColor: "rgba(255,255,255,0.8)",
    //alignItems: "center",
    //justifyContent: "center",
  },
  title: {
    alignSelf: "center",
    //    marginTop: 40,
    //backgroundColor: "#fff",
    fontSize: 30,
    //alignItems: "center",
    //justifyContent: "center",
  },
  credits: {
    marginTop: 10,
    //backgroundColor: "#fff",
    fontSize: 15,
    //alignItems: "center",
    //justifyContent: "center",
  },
  imgBackground: {
    //width: "100%",
    marginTop: 40,
    height: "100%",
    flex: 1,
  },
  buttonView: {
    marginBottom: 10,
    //width: Dimensions.get("window").width,
    marginLeft: 5,
    marginRight: 5,
    height: 60,
    backgroundColor: "rgb(0, 143, 52)",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonViewText: {
    fontSize: 45,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
});
