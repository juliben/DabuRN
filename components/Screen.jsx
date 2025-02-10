import React from "react";
import { View } from "react-native";
import Constants from "expo-constants";

const Screen = ({ children }) => {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight, flex: 1 }}>
      {children}
    </View>
  );
};

export default Screen;
