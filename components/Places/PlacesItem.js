import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const PlacesItem = ({ place, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ url: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlacesItem;

PlacesItem.propTypes = {
  place: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({});
