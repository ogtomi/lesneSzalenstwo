import React from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import MyModal from "../components/EssentialScreen/MyModal";
//import rules from '../../data/rules.txt'

const image = {
  uri: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
};

const EssentialScreen = ({ history }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
      <View>
        <MyModal name="Zasady zachowania w lesie" text={rules} />
        <MyModal name="Co należy wziąć ze sobą" text="Jakis tekst" />
        <MyModal name="Niezbędne numery" text={numbers} />
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => history.goBack()}
        >
          <Text style={styles.buttonViewText}>{"<<<"}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default EssentialScreen;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    resizeMode: "stretch",
    ...StyleSheet.absoluteFillObject,
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

const rules =
  "W lasach zabrania się:\n\n1) Zanieczyszczania gleby i wód\n\n2) Zaśmiecania\n\n3) Rozkopywania gruntu\n\n4) Niszczenia grzybów oraz grzybni\n\n5) Niszczenia lub uszkadzania drzew, krzewów lub innych roślin";
const numbers =
  "Numery:\n\nNUMER ALARMOWY: 112\n\nPOLICJA: 997\n\nSTRAŻ POŻARNA: 998\n\nPOGOTOWIE RATUNKOWE: 999";
