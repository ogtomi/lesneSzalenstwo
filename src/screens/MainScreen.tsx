import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { connect } from 'react-redux'

const image = {
  uri: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};

const MainScreen = ({ history }) => {
  const [isLoggedIn, setLogIn] = useState(false)

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {isLoggedIn ? setLogIn(false) : setLogIn(true)}}
        >
          <Text style={styles.text}>{isLoggedIn ? "LOGOUT" : "LOGIN"}</Text>
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
              disabled={!isLoggedIn}
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

const mapStateToProps = (state) => {
  return { loginData: state.sign };
};

export default connect(mapStateToProps)(MainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
