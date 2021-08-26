import React, { useEffect } from "react";
import { StyleSheet, Text, View, PermissionsAndroid } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";

import MainScreen from "./src/screens/MainScreen";
import InfoScreen from "./src/screens/InfoScreen";
import PathsScreen from "./src/screens/PathsScreen";
import MapScreen from "./src/screens/MapScreen";
import EssentialScreen from "./src/screens/EssentialScreen";
import ScanQrScreen from "./src/screens/ScanQrScreen";

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
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
