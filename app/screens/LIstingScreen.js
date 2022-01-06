import { StyleSheet, Text, View, Image } from "react-native";

import ListItem from "../components/ListItem";

import { colors } from "../config/colors";

const ListingsScreen = () => {
  const title = "Modern House";
  const price = "Ksh 30,000";

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80",
        }}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image="http://assets.stickpng.com/images/58582c01f034562c582205ff.png"
            title="Collins Oduor"
            subtitle="10 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  userContainer: {
    width: "100%",
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default ListingsScreen;
