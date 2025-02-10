import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SearchIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPressOut={() => navigation.navigate("Buscar")}>
      <Ionicons name="search-outline" size={28} color="dimgrey" />
    </TouchableOpacity>
  );
};

export default SearchIcon;
