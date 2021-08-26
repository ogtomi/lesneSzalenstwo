import React, { useState } from "react";
import { Dimensions } from "react-native";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import LoginModal from "../components/Login/LoginModal";
import NotificationFlatList from "../components/Notification/NotificationFlatList";

const image = {
  uri: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};

class MainScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
        <View style={styles.container}>
          <NotificationFlatList
            history={this.props.history}
          ></NotificationFlatList>
          <View>
            <TouchableOpacity
              style={styles.alert}
              onPress={() => this.props.history.push("AlertScreen")}
            >
              <Text style={styles.text}>Zgłoś</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tiles}
              onPress={() => this.props.history.push("RestScreen")}
            >
              <Text style={styles.text}>Więcej...</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              console.log(this.props.loginData);
              this.props.history.push("LoginScreen");
            }}
          >
            <Text style={styles.text}>
              {!this.props.loginData.isSignedIn ? "LOGIN" : "LOGOUT"}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

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
    //width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 6 - 20,
    marginRight: 7,
    marginLeft: 7,
    marginBottom: 7,
    marginTop: 7,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 10,
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
    //width: 357,
    height: Dimensions.get("window").height / 6 - 40,
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
    fontSize: 20,
  },
  alert: {
    backgroundColor: "#FE3C72",
    //width: 357,
    height: Dimensions.get("window").height / 6 - 10,
    marginRight: 7,
    marginLeft: 7,
    marginBottom: 7,
    marginTop: 7,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
