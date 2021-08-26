import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TittleTattle from "../InfoScreen/TittleTattle";

const DATA = [
  {
    id: "1",
    title: "Ciekawosta 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "2",
    title: "Ciekawosta 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "3",
    title: "Ciekawosta 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

//const backgroundURL = require("../../img/tittletattle.jpg");

export default function InfoScreen() {
  return (
    <ImageBackground source={backgroundURL} style={styles.imgBackground}>
      {/* <View style={styles.container}>
        <Text style={styles.title}>Czy wiesz, że?</Text> */}
      <FlatList style={styles.container}>
        <TittleTattle
          title={"Ciekawostka 1"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a placerat leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec interdum mi, nec fermentum nisl. Quisque euismod sagittis felis, et semper neque dignissim sit amet. Curabitur eleifend sit amet nisl eget accumsan. Sed porta pretium efficitur. Praesent ac urna in urna tincidunt ultrices. Integer et"
          }
        />
        <TittleTattle
          title={"Ciekawostka 2"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a placerat leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec interdum mi, nec fermentum nisl. Quisque euismod sagittis felis, et semper neque dignissim sit amet. Curabitur eleifend sit amet nisl eget accumsan. Sed porta pretium efficitur. Praesent ac urna in urna tincidunt ultrices. Integer et"
          }
        />
        <TittleTattle
          title={"Ciekawostka 3"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a placerat leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec interdum mi, nec fermentum nisl. Quisque euismod sagittis felis, et semper neque dignissim sit amet. Curabitur eleifend sit amet nisl eget accumsan. Sed porta pretium efficitur. Praesent ac urna in urna tincidunt ultrices. Integer et"
          }
        />
      </FlatList>
      {/* <Text style={styles.credits}>
          Autorzy: Krzysztof Jeschke i Tomasz Lewandowski
        </Text>
      </View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
  },
  title: {
    marginTop: 40,
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
    height: "100%",
    flex: 1,
  },
});
