import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const MainScreen = ({ history }) => {
  return (
    <View style={styles.container}>
      <View style={styles.columns}>
        <View style={styles.rows}>
          <TouchableOpacity
            onPress={() => history.push("InfoScreen")}
            style={styles.tiles}
          >
            <Text>InfoScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => history.push("MapScreen")}
            style={styles.tiles}
          >
            <Text>MapScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => history.push("PathsScreen")}
            style={styles.tiles}
          >
            <Text>PathsScreen</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rows}>
          <TouchableOpacity
            onPress={() => history.push("InfoScreen")}
            style={styles.tiles}
          >
            <Text>InfoScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => history.push("MapScreen")}
            style={styles.tiles}
          >
            <Text>MapScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => history.push("PathsScreen")}
            style={styles.tiles}
          >
            <Text>PathsScreen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40
  },
  tiles: {
    backgroundColor: "#228B22",
    height: 100,
    width: 100,
    justifyContent: "center",
    marginLeft: 7,
    marginRight: 7,
    marginTop: 7,
    marginBottom: 7,
  },
  rows: {
    flexDirection: "row",
  },
  columns: {
    flexDirection: "column",
  },
});
