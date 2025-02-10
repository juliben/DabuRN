import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = async () => {
    try {
      const storedBookmarks = await AsyncStorage.getItem("bookmarks");
      if (storedBookmarks) setBookmarks(JSON.parse(storedBookmarks));
    } catch (error) {
      console.error("Failed to load bookmarks", error);
    }
  };

  const toggleBookmark = async (word) => {
    let updatedBookmarks;

    if (bookmarks.some((b) => b.word === word.word)) {
      updatedBookmarks = bookmarks.filter((b) => b.word !== word.word);
    } else {
      updatedBookmarks = [...bookmarks, word];
    }

    setBookmarks(updatedBookmarks);
    await AsyncStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <BookmarksContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
};
