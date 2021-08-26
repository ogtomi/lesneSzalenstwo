import React, { useEffect } from "react";
import { StyleSheet, Text, View, PermissionsAndroid } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import MainScreen from "./src/screens/MainScreen";
import InfoScreen from "./src/screens/InfoScreen";
import PathsScreen from "./src/screens/PathsScreen";
import MapScreen from "./src/screens/MapScreen";
import EssentialScreen from "./src/screens/EssentialScreen";
import ScanQrScreen from "./src/screens/ScanQrScreen";

import { Camera } from "expo-camera";

// useEffect(() => {
//   (async () => {
//     const { status } = await Camera.requestPermissionsAsync();
//   })();
// }, []);

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

requestCameraPermission();

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route path="/InfoScreen" component={InfoScreen} />
          <Route path="/MapScreen" component={MapScreen} />
          <Route path="/PathsScreen" component={PathsScreen} />
          <Route path="/EssentialScreen" component={EssentialScreen} />
          <Route path="/ScanQrScreen" component={ScanQrScreen} />
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
