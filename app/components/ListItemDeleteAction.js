import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";

const ListItemDeleteAction = (progress, dragX) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="trash-can" size={30} />
    </View>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
  },
});
