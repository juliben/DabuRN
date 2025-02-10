import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const BookmarksIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPressOut={() => navigation.navigate("Favoritos")}>
      <Ionicons name="bookmarks-outline" size={28} color="dimgrey" />
    </TouchableOpacity>
  );
};

export default BookmarksIcon;
