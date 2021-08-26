import { StatusBar } from "expo-status-bar";
import React from "react";
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
import TittleTattle from "../components/InfoScreen/TittleTattle";

const DATA = [
  {
    id: "1",
    title: "Ciekawostka 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "2",
    title: "Ciekawostka 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "3",
    title: "Ciekawostka 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "4",
    title: "Ciekawostka 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "5",
    title: "Ciekawostka 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

const backgroundURL = require("../../img/tittletattle.jpg");

export default function InfoScreen({ history }) {
  return (
    <ImageBackground source={backgroundURL} style={styles.imgBackground}>
      {/* <View style={styles.container}>
        <Text style={styles.title}>Czy wiesz, że?</Text> */}
      <FlatList
        ListHeaderComponent={<Text style={styles.title}>Czy wiesz, że?</Text>}
        style={styles.container}
        data={DATA}
        renderItem={({ item }) => (
          <TittleTattle title={item.title} content={item.content} />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
      {/* <Text style={styles.credits}>
          Autorzy: Krzysztof Jeschke i Tomasz Lewandowski
        </Text>
      </View> */}
      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => history.push("RestScreen")}
      >
        <Text style={styles.buttonViewText}>{"<<<"}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: "#fff",
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
    backgroundColor: "rgb(0, 80, 35)",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonViewText: {
    fontSize: 45,
    alignSelf: "center",
  },
});
