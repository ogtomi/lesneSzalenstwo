import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";

import MainScreen from "./src/screens/MainScreen";
import InfoScreen from "./src/screens/InfoScreen"
import PathsScreen from "./src/screens/PathsScreen"
import MapScreen from "./src/screens/MapScreen"

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route path="/InfoScreen" component={InfoScreen} />
          <Route path="/MapScreen" component={MapScreen} />
          <Route path="/PathsScreen" component={PathsScreen} />
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
