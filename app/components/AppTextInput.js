import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.inputContainer}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={22}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[styles.textInput, defaultStyles.text]}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});
