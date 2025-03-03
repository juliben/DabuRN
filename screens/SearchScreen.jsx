import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

import words from "../Entries2025.json";
import { Language } from "../App";

const SearchScreen = () => {
  const [language] = useContext(Language);
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState("");

  const sanitizedSearchTerm = searchTerm
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const filteredWords = words.filter(
    (item) =>
      item.word.toLowerCase().includes(sanitizedSearchTerm) ||
      item.translation
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(sanitizedSearchTerm)
  );

  const filteredWordsEnglish = words.filter(
    (item) =>
      item.word.toLowerCase().includes(sanitizedSearchTerm) ||
      item.english.toLowerCase().includes(sanitizedSearchTerm)
  );

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} />
          </TouchableOpacity>
          <TextInput
            placeholder={language === "es" ? "🔍 Buscar..." : "🔍 Search..."}
            style={styles.searchBar}
            value={searchTerm}
            onChangeText={setSearchTerm}
          ></TextInput>
        </View>
        <FlatList
          data={language === "es" ? filteredWords : filteredWordsEnglish}
          renderItem={({ item }) => {
            if (searchTerm.length < 2) return null;
            return (
              <View style={{ width: "100%" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("WordDetails", { word: item, language })
                  }
                  underlayColor="lightgrey"
                  width="100%"
                >
                  <View style={styles.container}>
                    <View style={styles.row}>
                      <Text style={styles.word} numberOfLines={2}>
                        {item.word}
                      </Text>
                      <View style={styles.view}>
                        <Text style={styles.translation} numberOfLines={2}>
                          {language === "es" ? item.translation : item.english}
                        </Text>
                        <Feather
                          style={styles.icon}
                          name="chevron-right"
                          size={22}
                          color="silver"
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "left",
    justifyContent: "flex-start",
  },
  innerContainer: { paddingHorizontal: 20 },
  header: {
    marginTop: Constants.statusBarHeight + 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  searchBar: {
    width: "80%",
    height: 50,
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  word: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    maxWidth: "50%",
  },
  translation: {
    fontSize: 15,
    textAlign: "right",
    color: "gray",
    flexGrow: 1,
    maxWidth: "80%",
  },
});

export default SearchScreen;
