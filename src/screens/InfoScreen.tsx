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
    title: "Bocianie spotkanie",
    content:
      "Spacerując leśną ścieżką, można powoli zaobserwować zbliżającą się jesień. Jednakże nie każdy wie, że sierpień to również miesiąc, gdy dochodzi to niezwykłych spotkań na szczycie. Zebrań, których tematem przewodnim jest „omówienie” wyprawy na kontynent odległy od Polski o tysiące kilometrów.",
  },
  {
    id: "2",
    title: "Pustułki w powietrzu",
    content:
      "Wcześniej pustułki przebywały w prowadzonym przez Nadleśnictwo Olsztyn Ośrodku Rehabilitacji Ptaków Drapieżnych.",
  },
  {
    id: "3",
    title: "Światowy Dzień Komara",
    content:
      "W przeprowadzanych przez Lasy Państwowe badaniach opinii publicznej niechęć do kłujących nas owadów deklaruje aż co trzeci badany.",
  },
  {
    id: "4",
    title: "Rzeźbią „Ducha lasu”",
    content:
      "W poniedziałek, mimo deszczowej pogody, rozpoczął się plener artystyczny pod hasłem „Duch lasu”, współorganizowany przez Nadleśnictwo Dukla i Gminny Ośrodek Kultury w Iwoniczu Zdroju.",
  },
];

const backgroundURL = require("../../img/tittletattle.jpg");

export default function InfoScreen({ history }) {
  return (
    <ImageBackground source={backgroundURL} style={styles.imgBackground}>
      {/* <View style={styles.container}>
        <Text style={styles.title}>Czy wiesz, że?</Text> */}
      <FlatList
        ListHeaderComponent={<Text style={styles.title}>Aktualności</Text>}
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
    width: "100%",
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
