import React from "react";
import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";

import MyModal from "../components/EssentialScreen/MyModal";

const image = {
  uri: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
};

const EssentialScreen = ({ history }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
      <View>
        <MyModal name="Zasady zachowania w lesie" text="Jakis tekst" />
        <MyModal name="Co należy wziąc ze sobą" text="Jakis tekst" />
        <MyModal name="Niezbędne numery" text="Jakis tekst" />
        <Button title="Go back" onPress={() => history.push("/")} />
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
  },
});
