import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

const image = {
  uri: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};

const RestScreen = ({ history }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => history.push("InfoScreen")}
          style={styles.tiles}
        >
          <Text style={styles.text}>Informacje</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => history.push("MapScreen")}
          style={styles.tiles}
        >
          <Text style={styles.text}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => history.push("ScanQrScreen")}
          style={styles.tiles}
        >
          <Text style={styles.text}>ScanQrScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => history.push("EssentialScreen")}
          style={styles.tiles}
        >
          <Text style={styles.text}>Niezbędnik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => history.push("/")}
        >
          <Text style={styles.buttonViewText}>{"<<<"}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  tiles: {
    backgroundColor: "rgb(0, 80, 35)",
    width: 350,
    height: 100,
    marginRight: 7,
    marginLeft: 7,
    marginBottom: 7,
    marginTop: 7,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  rows: {
    flexDirection: "row",
  },
  columns: {
    flexDirection: "column",
  },
  bgImage: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    resizeMode: "stretch",
  },
  loginBtn: {
    backgroundColor: "#006400",
    width: 100,
    height: 30,
    marginRight: 7,
    marginLeft: 250,
    marginBottom: 7,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#FFFF",
  },
  alert: {
    backgroundColor: "#FE3C72",
    width: 357,
    height: 110,
    marginRight: 7,
    marginLeft: 7,
    marginBottom: 7,
    marginTop: 7,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  buttonView: {
    marginTop: 50,
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
