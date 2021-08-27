import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Dimensions, PermissionsAndroid } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import {
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import Achievement from "../components/ScanQrScreen/Achievement";
import { useState, useEffect } from "react";

var DATA = [
  {
    id: "1",
    placeName: "Pomnik przyrody",
    description:
      "Buk pospolity odm. czerwonolistnej w parku Steffensa jesienią.",
  },
  {
    id: "2",
    placeName: "Pomnik przyrody",
    description: "Dąb czerwony w parku Steffensa",
  },
];

const backgroundURL = require("../../img/tittletattle.jpg");

export default function ScanQrScreen({ history }) {
  const [scanQr, setScanQr] = useState(false);

  const [scanned, setScanned] = useState(false);

  const getQrData = (e) => {
    //console.log(e.data);
    try {
      var json_data = JSON.parse(e.data);
      setScanQr(false);
      var lastId = DATA[DATA.length - 1].id;
      if ("placeName" in json_data && "description" in json_data) {
        DATA = DATA.concat({
          id: lastId + 1,
          placeName: json_data["placeName"],
          description: json_data["description"],
        });
      } else {
        Alert.alert("Błąd", "Błędny kod QR");
      }
    } catch {
      Alert.alert("Błąd", "Błędny kod QR");
    }
    setScanQr(false);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
    })();
  }, []);

  return (
    <ImageBackground source={backgroundURL} style={styles.imgBackground}>
      {/* <View style={styles.container}>
        <Text style={styles.title}>Czy wiesz, że?</Text> */}
      <FlatList
        ListHeaderComponent={<Text style={styles.title}>Twoje odznaki</Text>}
        style={styles.container}
        data={DATA}
        renderItem={({ item }) => (
          <Achievement
            placeName={item.placeName}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <TouchableOpacity
        style={styles.buttonScanView}
        onPress={() => {
          setScanQr(true);
        }}
      >
        <Text style={styles.buttonScanViewText}>{"Skanuj QR"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonBackView}
        onPress={() => history.push("RestScreen")}
      >
        <Text style={styles.buttonBackViewText}>{"<<<"}</Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={scanQr}>
        <View style={styles.qrStyle}>
          <BarCodeScanner
            onBarCodeScanned={getQrData}
            style={StyleSheet.absoluteFillObject}
          />

          <TouchableOpacity
            style={styles.buttonBackViewModal}
            onPress={() => setScanQr(false)}
          >
            <Text style={styles.buttonBackViewText}>{"<<<"}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  title: {
    alignSelf: "center",
    //    marginTop: 40,
    //backgroundColor: "#fff",
    fontSize: 30,
    //alignItems: "center",
    //justifyContent: "center",
  },
  credits: {
    marginTop: 10,
    //backgroundColor: "#fff",
    fontSize: 15,
    //alignItems: "center",
    //justifyContent: "center",
  },
  imgBackground: {
    width: "100%",
    marginTop: 40,
    height: "100%",
    flex: 1,
  },
  buttonBackView: {
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
  buttonBackViewModal: {
    marginBottom: 10,
    width: Dimensions.get("window").width,
    marginLeft: 5,
    marginRight: 5,
    height: 60,
    backgroundColor: "rgb(0, 80, 35)",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
  },
  buttonBackViewText: {
    fontSize: 45,
    alignSelf: "center",
  },
  buttonScanView: {
    marginTop: 10,
    marginBottom: 10,
    //width: Dimensions.get("window").width,
    marginLeft: 5,
    marginRight: 5,
    height: 60,
    backgroundColor: "rgb(111, 115, 0)",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonScanViewText: {
    fontSize: 35,
    alignSelf: "center",
  },
  qrStyle: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "black",
    //opacity: 0.5,
  },
});
