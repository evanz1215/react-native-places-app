import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import OutlineButton from "../components/UI/OutlineButton";
import { Colors } from "../constants/colors";
import { fetchPlaceDetails } from "../util/database";

const PlaceDetails = ({ route, navigation }) => {
  const selectedPlaceId = route.params.placeId;

  const [fetchPlace, setFetchedPlace] = useState();

  useEffect(() => {
    const loadPlaceData = async () => {
      const place = await fetchPlaceDetails(selectedPlaceId);
      console.log(place);
      setFetchedPlace(place);
      navigation.setOptions({
        title: place.title,
      });
    };

    loadPlaceData();
  }, [selectedPlaceId]);

  if (!fetchPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const showOnMapHandler = () => {};

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchPlace.address}</Text>
        </View>
        <OutlineButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlineButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
