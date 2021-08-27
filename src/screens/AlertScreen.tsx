import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Dimensions,
} from "react-native";

import MyModal from "../components/EssentialScreen/MyModal";
import DialogInput from "react-native-dialog-input";

const image = {
  uri: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};

const AlertScreen = ({ history }) => {
  const [alert, setAlert] = useState(false);
  const [showBox, setShowBox] = useState(true);

  const showConfirmDialog = (type) => {
    return Alert.alert("Czy na pewno?", "Potwierdź zgłoszenie", [
      // The "Yes" button
      {
        text: "Tak",
        onPress: () => {
          setShowBox(false);
          console.log("Zgłoszono " + type);
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: "Nie",
      },
    ]);
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.tiles}
          onPress={() => showConfirmDialog("pożar")}
        >
          <Text style={styles.text}>Zgłoś pożar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tiles}
          onPress={() => showConfirmDialog("wysypisko śmieci")}
        >
          <Text style={styles.text}>Zgłoś śmieci</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tiles}
          onPress={() => (alert ? setAlert(false) : setAlert(true))}
        >
          <Text style={styles.text}>Zgłoś inne</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => history.push("/")}
        >
          <Text style={styles.buttonViewText}>{"<<<"}</Text>
        </TouchableOpacity>
        <DialogInput
          isDialogVisible={alert}
          title={"Zgłoś inne"}
          hintInput={"Wprowadź..."}
          submitInput={(inputText) => {
            console.log("Zgłoszono " + inputText);
          }}
          closeDialog={() => {
            setAlert(false);
          }}
        ></DialogInput>
      </View>
    </ImageBackground>
  );
};

export default AlertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //textAlign: "center",
    //alignItems: "center",
    //backgroundColor: "#fff",
  },
  text: {
    color: "#FFFF",
    fontSize: 25,
  },
  tiles: {
    backgroundColor: "rgb(0, 80, 35)",
    //width: 380,
    height: Dimensions.get("window").height / 8,
    marginBottom: 7,
    marginTop: 7,
    marginHorizontal: 5,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  bgImage: {
    flex: 1,
    alignItems: "stretch",
    resizeMode: "stretch",
    ...StyleSheet.absoluteFillObject,
  },
  buttonView: {
    marginTop: 50,
    marginBottom: 10,
    width: "100%",
    //marginLeft: 5,
    //marginRight: 5,
    height: 60,
    backgroundColor: "rgb(0, 80, 35)",
    //alignContent: "center",
    //justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
  },
  buttonViewText: {
    fontSize: 45,
    alignSelf: "center",
  },
});
