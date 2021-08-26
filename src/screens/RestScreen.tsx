import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";

const image = {
  uri: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};

class RestScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.props.history.push("InfoScreen")}
            style={styles.tiles}
          >
            <Text style={styles.text}>Informacje</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.history.push("MapScreen")}
            style={styles.tiles}
          >
            <Text style={styles.text}>Mapa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.history.push("ScanQrScreen")}
            style={
              !this.props.loginData.isSignedIn
                ? styles.disabledTiles
                : styles.tiles
            }
            disabled={!this.props.loginData.isSignedIn ? true : false}
          >
            <Text style={styles.text}>Odznaczenia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.history.push("EssentialScreen")}
            style={styles.tiles}
          >
            <Text style={styles.text}>Niezbędnik</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => this.props.history.push("/")}
          >
            <Text style={styles.buttonViewText}>{"<<<"}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  return { loginData: state.sign };
};

export default connect(mapStateToProps)(RestScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  tiles: {
    backgroundColor: "rgb(0, 80, 35)",
    //width: 350,
    height: 100,
    marginRight: 7,
    marginLeft: 7,
    marginBottom: 7,
    marginTop: 7,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  disabledTiles: {
    backgroundColor: "#808080",
    //width: 350,
    height: 100,
    marginRight: 7,
    marginLeft: 7,
    marginBottom: 7,
    marginTop: 7,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 10
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
    fontSize: 20,
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
