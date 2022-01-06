import React from "react";
import {
  TouchableHighlight,
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";

import { colors } from "../config/colors";

const ListItem = ({ title, image, IconComponent, subtitle, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <View style={styles.wrapper}>
        {IconComponent}
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  subtitle: {
    color: colors.medium,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
});

export default ListItem;
