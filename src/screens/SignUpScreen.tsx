import React from "react";
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-gesture-handler'

const image = {
  uri: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
};

const SignUpScreen = ({ history }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.container}>
        <Text style={styles.logo}>REJESTRACJA</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Imie..."
            placeholderTextColor="#003f5c"
            //onChangeText={(text) => this.setState({ name: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Nazwisko..."
            placeholderTextColor="#003f5c"
            //onChangeText={(text) => this.setState({ surname: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            //onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Haslo..."
            placeholderTextColor="#003f5c"
            //onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity
          onPress={() => history.push("/")}
          style={styles.loginBtn}
        >
          <Text style={styles.loginText}>Zarejestruj</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignUpScreen;

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
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
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
