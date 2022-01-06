import React from "react";
import { View, StyleSheet, Image, Platform, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <View style={styles.button}>
          <MaterialCommunityIcons name="close" color={colors.white} size={30} />
        </View>
        <View style={styles.button}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color={colors.white}
            size={30}
          />
        </View>
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  controls: {
    width: "100%",
    height: 40,
    position: "absolute",
    top: StatusBar.currentHeight,
    left: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  button: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
