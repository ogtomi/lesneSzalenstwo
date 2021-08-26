import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { signIn } from "../actions";

const image = {
  uri: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
};

class LoginScreen extends React.Component {
  state = {
    inputEmail: null,
    inputPassword: null,
  };

  render() {
    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
        <View style={styles.container}>
          <Text style={styles.logo}>LOGIN</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="#003f5c"
              onChangeText={(text) => this.setState({ inputEmail: text })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..."
              placeholderTextColor="#003f5c"
              onChangeText={(text) => this.setState({ inputPassword: text })}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.signIn(
                this.state.inputEmail,
                this.state.inputPassword
              );
              this.props.history.push("/");
            }}
            style={styles.loginBtn}
          >
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.history.push("SignUpScreen")}
          >
            <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  return { loginData: state.sign };
};

export default connect(mapStateToProps, { signIn })(LoginScreen);

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    resizeMode: "stretch",
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
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "rgb(0, 80, 35)",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ffff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "rgb(0, 80, 35)",
  },
  loginBtn: {
    width: 220,
    backgroundColor: "rgb(0, 80, 35)",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});
