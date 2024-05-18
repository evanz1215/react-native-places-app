import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlacesItem from "./PlacesItem";
import PropTypes from "prop-types";
import { Colors } from "../../constants/colors";

const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlacesItem place={item} onSelect={() => {}} />}
    />
  );
};

export default PlacesList;

PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
