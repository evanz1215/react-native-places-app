import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { Colors } from "../../constants/colors";

const PlacesItem = ({ place, onSelect }) => {
  return (
    <Pressable
      onPress={onSelect}
      style={({ pressed }) => [styles.item, pressed && styles.passed]}
    >
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlacesItem;

PlacesItem.propTypes = {
  place: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  passed: {
    opacity: 0.9,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.gray700,
  },
  address: {
    fontWeight: "bold",
    fontSize: 12,
    color: Colors.gray700,
  },
});
