import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";

import { houses } from "../config/houses";
import AppPicker from "../components/AppPicker";

const categories = [
  { label: "All", value: 0 },
  { label: "Bungalows", value: 1 },
  { label: "Maisonettes", value: 2 },
  { label: "Apartments", value: 3 },
];

const ListingsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <FlatList
        data={houses}
        keyExtractor={(house, index) => `${house.title}_${index}`}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => console.log("refreshed")}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({});
