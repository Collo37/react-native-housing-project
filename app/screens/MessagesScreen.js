import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

import messages from "../config/messages";
import { colors } from "../config/colors";

const MessagesScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [allMessages, setAllMessages] = useState(messages);
  return (
    <Screen style={styles.messagesContainer}>
      <FlatList
        data={allMessages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            renderRightActions={ListItemDeleteAction}
            onPress={() => console.log(item.description)}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setAllMessages([
            {
              id: 10,
              title: "Single Message",
              description: "Just a random message by a random user",
              image:
                "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg",
            },
          ]);
        }}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default MessagesScreen;
