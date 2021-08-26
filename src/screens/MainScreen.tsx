import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import NotificationFlatList from "../components/Notification/NotificationFlatList";

const image = {
  uri: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};

const MainScreen = ({ history }) => {
  const [isLoggedIn, setLogIn] = useState(false);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.container}>
        <NotificationFlatList history={history}></NotificationFlatList>
        <View>
          <TouchableOpacity
            style={styles.alert}
            onPress={() => history.push("AlertScreen")}
          >
            <Text style={styles.text}>Zgłoś</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tiles}
            onPress={() => history.push("RestScreen")}
          >
            <Text style={styles.text}>Więcej...</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            isLoggedIn ? setLogIn(false) : setLogIn(true);
          }}
        >
          <Text style={styles.text}>{isLoggedIn ? "LOGOUT" : "LOGIN"}</Text>
        </TouchableOpacity>
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
    //backgroundColor: "#fff",

    marginTop: 40,
  },
  tiles: {
    backgroundColor: "rgb(0, 80, 35)",
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
    backgroundColor: "rgb(0, 80, 35)",
    width: 357,
    height: 50,
    marginRight: 7,
    marginLeft: 7,
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
});
