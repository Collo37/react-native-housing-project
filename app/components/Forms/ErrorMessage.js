import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../config/colors";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <Text style={styles.text}>{error}</Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  text: {
    color: colors.danger,
  },
});
