import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { Language } from "../App";

const EnEsButton = () => {
  const [language, setLanguage] = useContext(Language);

  const handlePress = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <TouchableOpacity onPressOut={handlePress}>
      <View
        style={[
          styles.container,
          { backgroundColor: language === "es" ? colors.es : colors.en },
        ]}
      >
        <Text style={styles.text}>{language === "es" ? "ES" : "EN"}</Text>
      </View>
    </TouchableOpacity>
  );
};

const colors = {
  en: "#003153",
  es: "#8f1010",
};

const styles = StyleSheet.create({
  container: {
    height: 37,
    width: 37,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
  },
  text: {
    color: "white",
    fontSize: 15,
  },
});

export default EnEsButton;
