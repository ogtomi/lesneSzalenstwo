import React from "react";
import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";

import MyModal from "../components/EssentialScreen/MyModal";

const picture =
  "https://www.lasy.gov.pl/++theme++lasy/cache/img/static_162608205501/7c525698-bdd0-4879-8c8f-980e76c55f8d.jpeg";

const EssentialScreen = ({ history }) => {
  return (
      <View>
        <MyModal name="Zasady zachowania w lesie" text="Jakis tekst" />
        <MyModal name="Co należy wziąc ze sobą" text="Jakis tekst" />
        <MyModal name="Niezbędne numery" text="Jakis tekst" />
        <Button title="Go back" onPress={() => history.push("/")} />
      </View>
  );
};

export default EssentialScreen;

const styles = StyleSheet.create({
  bgImage: {
    width: 100,
    height: 100,
  },
});
