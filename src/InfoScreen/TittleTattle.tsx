import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TittleTattle() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ciekawostka 1</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
        placerat leo. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Sed nec interdum mi, nec
        fermentum nisl. Quisque euismod sagittis felis, et semper neque
        dignissim sit amet. Curabitur eleifend sit amet nisl eget accumsan. Sed
        porta pretium efficitur. Praesent ac urna in urna tincidunt ultrices.
        Integer et
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderWidth: 1,
    margin: 10,
    //justifyContent: "center",
  },
  title: {
    marginTop: 40,
    backgroundColor: "#fff",
    fontSize: 30,
    //alignItems: "center",
    //justifyContent: "center",
  },
  content: {
    marginTop: 10,
    backgroundColor: "#fff",
    fontSize: 15,
    //alignItems: "center",
    //justifyContent: "center",
  },
});
