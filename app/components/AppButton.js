import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { colors } from "../config/colors";

const AppButton = ({ title, onPress, primary }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: primary ? colors.primary : colors.secondary },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "700",
  },
});

export default AppButton;
