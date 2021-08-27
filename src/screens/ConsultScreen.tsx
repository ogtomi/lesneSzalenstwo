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

import Consult from "../components/ConsultScreen/Consult";
import DialogInput from "react-native-dialog-input";

const DATA = [
  {
    id: "1",
    title: "Wycinka drzew",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "2",
    title: "Odstrzał dzików",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];
const backgroundURL = require("../../img/tittletattle.jpg");
export default function ConsultScreen({ history }) {
  const [alert, setAlert] = useState(false);
  return (
    <ImageBackground source={backgroundURL} style={styles.imgBackground}>
      <View
        style={{
          //backgroundColor: "rgba(255,255,255,0.8)",
          paddingVertical: 10,
          borderRadius: 10,
          margin: 5,
        }}
      >
        <Text style={styles.title}>Akrualne konsultacje</Text>
        <FlatList
          style={styles.container}
          data={DATA}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={() => setAlert(true)}>
                <Consult title={item.title} content={item.content}></Consult>
                <DialogInput
                  isDialogVisible={alert}
                  title={"Zgłoś uwagi"}
                  hintInput={"Wprowadź..."}
                  submitInput={(inputText) => {
                    console.log("Zgłoszono " + inputText);
                    setAlert(false);
                  }}
                  closeDialog={() => {
                    setAlert(false);
                  }}
                ></DialogInput>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => history.push("/")}
        >
          <Text style={styles.buttonViewText}>{"<<<"}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 2.5,
    //flex: 1,
    borderRadius: 10,
    //backgroundColor: "rgba(255,255,255,0.8)",
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
    position: "absolute",
    bottom: 0,
  },
});
