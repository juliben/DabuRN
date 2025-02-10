import React, { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Language } from "../App";
import Feather from "@expo/vector-icons/Feather";

import { BookmarksContext } from "../BookmarksContext";
import Separator from "../components/Separator";

const SavedWords = () => {
  const navigation = useNavigation();
  const [language] = useContext(Language);
  const { bookmarks } = useContext(BookmarksContext);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={bookmarks}
        renderItem={({ item }) => (
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
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
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
    maxWidth: "50%",
  },
});

export default SavedWords;
