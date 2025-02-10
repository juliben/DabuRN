import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { BookmarksContext } from "../BookmarksContext";

const WordDetails = ({ route }) => {
  const navigation = useNavigation();
  const { word, language } = route.params;

  const { bookmarks, toggleBookmark } = useContext(BookmarksContext);
  const isBookmarked = bookmarks.some((b) => b.word === word.word);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={30} color="dimgrey" />
      </TouchableOpacity>
      <View style={styles.wordContainer}>
        <Text style={styles.mainWord}>{word.word}</Text>
        <Text style={styles.phonetics}>{word.phonetics}</Text>
        <Text style={styles.translation}>
          {language === "es" ? word.translation : word.english}
        </Text>
        <TouchableOpacity onPress={() => toggleBookmark(word)}>
          <Ionicons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
            size={30}
            color={isBookmarked ? "#ffcc00" : "dimgrey"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  backButton: {
    position: "absolute",
    top: "5%",
    left: "5%",
  },
  wordContainer: {
    width: "80%",
    flex: 1,
    alignItems: "left",
    justifyContent: "center",
    gap: 20,
  },
  mainWord: {
    fontSize: 35,
  },
  phonetics: {
    fontSize: 20,
    color: "grey",
  },
  translation: {
    fontSize: 18,
    color: "black",
  },
});

export default WordDetails;
