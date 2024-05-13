import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

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

const styles = StyleSheet.create({});
