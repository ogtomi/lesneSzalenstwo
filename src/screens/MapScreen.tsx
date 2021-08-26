import React from "react";
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
  Polygon,
} from "react-native-maps";

export default function MapScreen() {
  const [first, setFirst] = React.useState(true);

  var initNewPolygon: Array<LatLng> = [
    {
      latitude: 54.539,
      longitude: 18.473,
    },
  ];

  const [newPolygon, setNewPolygon] = React.useState(initNewPolygon);

  var initPolygons = [
    // {
    //   cords: [
    //     {
    //       latitude: 54.539,
    //       longitude: 18.473,
    //     },
    //     {
    //       latitude: 54.51764538002475,
    //       longitude: 18.50596245378256,
    //     },
    //     {
    //       latitude: 54.51667795347282,
    //       longitude: 18.438833132386208,
    //     },
    //   ],
    //   title: "TEST",
    //   description: "DESCPRI",
    // },
  ];
  var tempCords: Array<LatLng> = [
    {
      latitude: 54.539,
      longitude: 18.473,
    },
  ];
  var template = {
    cords: tempCords,
    title: "TEST",
    description: "DESCPRI",
  };

  const [polygons, setPolygons] = React.useState(initPolygons);

  return (
    <View style={{ marginTop: 50, flex: 1 }}>
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
          if (first) {
            setNewPolygon([e.nativeEvent.coordinate]);
            setFirst(false);
          } else {
            setNewPolygon(newPolygon.concat(e.nativeEvent.coordinate));
            console.log(newPolygon);
          }
          //setPolygons(polygons.concat(template));
          //setPin(e.nativeEvent.coordinate);
          //setPolygon(polygon.concat(e.nativeEvent.coordinate));
          //console.log("Polygon", polygon);
        }}
      >
        <Polygon coordinates={newPolygon} />

        {polygons.map((polygon, index) => (
          <Polygon
            key={index}
            coordinates={polygon.cords}
            onPress={(e) => {
              Alert.alert(polygon.title, polygon.description, [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ]);
            }}
            tappable={true}
            fillColor="rgba(255,0,0,0.5)"
          />
        ))}
      </MapView>
      <View style={styles.buttonContainer}>
        <Button
          onPress={(e) => {
            template.cords = newPolygon;
            setPolygons(polygons.concat(template));
            setNewPolygon(tempCords);
            setFirst(true);
          }}
          title="Add"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
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
});

//<Button title="Go back" onPress={() => history.push('RestScreen')}/>
