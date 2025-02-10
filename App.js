import { createContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WordDetails from "./screens/WordDetails";
import SavedWords from "./screens/SavedWords";
import SearchScreen from "./screens/SearchScreen";
import EnEsButton from "./components/EnEsButton";
import SearchIcon from "./components/SearchIcon";
import BookmarksIcon from "./components/BookmarksIcon";
import { BookmarksProvider } from "./BookmarksContext";
import WordList from "./components/WordList";

export const Language = createContext("es");

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Diccionario Guna"
      component={WordList}
      options={{
        headerTitleAlign: "center",
        headerShadowVisible: true,
        headerRight: () => (
          <View style={styles.headerRightContainer}>
            <SearchIcon /> <BookmarksIcon />
          </View>
        ),
        headerLeft: () => <EnEsButton />,
      }}
    />
    <Stack.Screen
      name="WordDetails"
      component={WordDetails}
      options={{
        headerTitle: "",
        headerShown: false,
      }}
    />
    <Stack.Screen name="Favoritos" component={SavedWords} />
    <Stack.Screen
      name="Buscar"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default function App() {
  const [language, setLanguage] = useState("es");

  return (
    <BookmarksProvider>
      <Language.Provider value={[language, setLanguage]}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Language.Provider>
    </BookmarksProvider>
  );
}

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: "row",
    gap: 5,
  },
});
