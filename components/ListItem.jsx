import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Language } from "../App";

const ListItem = ({ item }) => {
  const navigation = useNavigation();
  const [language] = useContext(Language);

  return (
    <View style={{ width: "100%" }}>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("WordDetails", { word: item, language })
        }
        underlayColor="lightgrey"
        width="100%"
      >
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.word}>{item.word}</Text>
            <View style={styles.view}>
              <Text style={styles.translation}>
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
      </TouchableHighlight>
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
    maxWidth: "60%",
    flexGrow: 1,
    // minWidth: 50,
    // flexShrink: 1,
    // flexWrap: "wrap",
  },
});

export default ListItem;
