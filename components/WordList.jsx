import React from "react";
import Separator from "./Separator";
import { FlatList } from "react-native";
import words from "../Entries2025.json";

import ListItem from "./ListItem";

const WordList = () => {
  return (
    <FlatList
      data={words}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ListItem item={item} />}
      ItemSeparatorComponent={Separator}
      m
    />
  );
};

export default WordList;
