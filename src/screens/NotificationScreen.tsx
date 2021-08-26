import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions } from "react-native";
import { Button, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";

export default function NotificationScreen(props) {
  var base64Image = "data:image/png;base64," + props.location.image;
  return (
    <View style={styles.container}>
      <Text style={styles.modalTitle}>{props.location.title}</Text>
      <Text style={styles.modalContent}>{props.location.content}</Text>
      <Image
        style={{ width: 512 / 2, height: 410 / 2 }}
        source={{ uri: base64Image }}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.buttonBackView}
          onPress={() => props.history.goBack()}
        >
          <Text style={styles.buttonBackViewText}>{"<<<"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "rgba(255,255,255,0.8)",
    alignItems: "center",
    justifyContent: "center",
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
  modal: {
    flex: 1,
    //backgroundColor: "rgba(255,255,255,1)",
    alignItems: "center",
  },
  modalTitle: {
    marginTop: 40,
    fontSize: 30,
    //alignItems: "center",
    //justifyContent: "center",
  },
  modalContent: {
    marginTop: 10,
    //backgroundColor: backgorundColor,
    fontSize: 15,
    //alignItems: "center",
    //justifyContent: "center",
  },
  buttonView: {
    marginBottom: 10,
    width: Dimensions.get("window").width,
    position: "absolute",
    bottom: 0,
    marginLeft: 5,
    marginRight: 5,
    height: 60,
    backgroundColor: "#fff",
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

  buttonBackView: {
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
  buttonBackViewText: {
    fontSize: 45,
    alignSelf: "center",
  },
});
