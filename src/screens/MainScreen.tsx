import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

const image = {
  uri: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
};

const MainScreen = ({ history }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => console.log("click")}
        >
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.columns}>
          <View style={styles.rows}>
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
              onPress={() => history.push("PathsScreen")}
              style={styles.tiles}
            >
              <Text style={styles.text}>Scieżki</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <TouchableOpacity
              onPress={() => history.push("InfoScreen")}
              style={styles.tiles}
            >
              <Text style={styles.text}>InfoScreen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => history.push("EssentialScreen")}
              style={styles.tiles}
            >
              <Text style={styles.text}>Niezbędnik</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => history.push("PathsScreen")}
              style={styles.tiles}
            >
              <Text style={styles.text}>PathsScreen</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <TouchableOpacity
              onPress={() => history.push("InfoScreen")}
              style={styles.tiles}
            >
              <Text style={styles.text}>InfoScreen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => history.push("EssentialScreen")}
              style={styles.tiles}
            >
              <Text style={styles.text}>Niezbędnik</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => history.push("PathsScreen")}
              style={styles.tiles}
            >
              <Text style={styles.text}>PathsScreen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
  tiles: {
    backgroundColor: "#228B22",
    width: 110,
    height: 110,
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
    width: 60,
    height: 25,
    marginRight: 7,
    marginLeft: 250,
    marginBottom: 7,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#FFFF"
  }
});
