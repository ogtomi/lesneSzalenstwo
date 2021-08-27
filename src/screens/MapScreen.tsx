import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from "react-native";
import MapView, {
  Callout,
  Circle,
  LatLng,
  Marker,
  Overlay,
  Polygon,
} from "react-native-maps";
import { useEffect } from "react";

const colors = {
  fire: "rgba(255,0,0,0.5)",
  zul: "rgba(0, 80, 35, 0.5)",
  work: "rgba(0,0,255,0.5)",
};

var DATA = [
  {
    id: "1",
    placeName: "Pożar",
    color: colors.fire,
    polygon: [
      {
        latitude: 54.539,
        longitude: 18.473,
      },
      {
        latitude: 54.51764538002475,
        longitude: 18.50596245378256,
      },
      {
        latitude: 54.51667795347282,
        longitude: 18.438833132386208,
      },
    ],
    description: "W tym regionie występuje pożar. Nie zbliżaj się do lasu.",
  },
  {
    id: "2",
    placeName: "Wycinka drzew",
    color: colors.zul,
    polygon: [
      {
        latitude: 54.565719249540585,
        longitude: 18.474481031298637,
      },
      {
        latitude: 54.586971780732505,
        longitude: 18.45448113977909,
      },
      {
        latitude: 54.57457591493654,
        longitude: 18.439203277230263,
      },
    ],
    description:
      "W tym regionie prowadzona jest wycinkia drzew. Uszanuj pracę leśników i nie przeszkadzaj im w pracy :)",
  },
  {
    id: "3",
    placeName: "Stado dzików",
    color: colors.work,
    polygon: [
      {
        latitude: 54.55451174534072,
        longitude: 18.544479981064796,
      },
      {
        latitude: 54.571553615353466,
        longitude: 18.537893816828728,
      },
      {
        latitude: 54.576738671839855,
        longitude: 18.51902011781931,
      },
      {
        latitude: 54.56705152630041,
        longitude: 18.507813848555088,
      },
      {
        latitude: 54.555366866164945,
        longitude: 18.516366071999073,
      },
    ],
    description:
      "W tym regionie występuje spore stado dzików, które może zaatakować człowieka. Unikaj przechodzenia przez ten obszar.",
  },
];

export default function MapScreen({ history }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getLastKnownPositionAsync();
      let cords = {
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
      };
      setLocation(cords);
    })();
  }, []);

  //   let text = "Waiting...";
  //   if (errorMsg) {
  //     text = errorMsg;
  //   } else if (location) {
  //     text = JSON.stringify(location);
  //   }
  //   console.log(text);
  return (
    <View
      style={{
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 54.539,
          longitude: 18.473,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        provider="google"
        onPress={(e) => {
          {
            console.log(location);
          }
        }}
      >
        {DATA.map((place, index) => (
          <Polygon
            key={index}
            coordinates={place.polygon}
            onPress={(e) => {
              Alert.alert(place.placeName, place.description, [{ text: "OK" }]);
            }}
            tappable={true}
            fillColor={place.color}
          />
        ))}
        <Marker
          coordinate={{ latitude: 54.539, longitude: 18.473 }}
          draggable={false}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
      </MapView>

      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => history.goBack()}
      >
        <Text style={styles.buttonViewText}>{"<<<"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    marginVertical: 50,
    width: Dimensions.get("window").width,
    backgroundColor: "transparent",
  },
  buttonView: {
    marginBottom: 10,
    width: "100%",

    //marginLeft: 5,
    marginRight: 15,
    height: 60,
    backgroundColor: "rgb(0, 80, 35)",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
  },
  buttonViewText: {
    fontSize: 45,
    alignSelf: "center",
  },
});

//<Button title="Go back" onPress={() => history.push('RestScreen')}/>
