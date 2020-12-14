import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import ScannedListItem from "../Components/ScannedListItem";

const { height, width } = Dimensions.get("screen");

const HistoryScreen = () => {
  const [historySelected, setHistorySelected] = useState(true);
  const [favoritesSelected, setFavoritesSelected] = useState(false);

  const toggleHistory = () => {
    setHistorySelected(true);
    setFavoritesSelected(false);
  };

  const toggleFavorites = () => {
    setHistorySelected(false);
    setFavoritesSelected(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableWithoutFeedback
          onPress={toggleHistory}
          style={{ width: (width * 0.9) / 2 }}
        >
          <View
            style={[styles.tab, { borderBottomWidth: historySelected ? 2 : 0 }]}
          >
            <Text style={styles.tabText}>History</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={toggleFavorites}
          style={{ width: (width * 0.9) / 2 }}
        >
          <View
            style={[
              styles.tab,
              { borderBottomWidth: favoritesSelected ? 2 : 0 },
            ]}
          >
            <Text style={styles.tabText}>Favorites</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ScannedListItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d13060",
    paddingVertical: 40,
    alignItems: "center",
  },
  tabsContainer: {
    width: width * 0.9,
    flexDirection: "row",
    marginBottom: 30,
  },
  tab: {
    borderBottomColor: "white",
    height: 50,
    width: (width * 0.9) / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "white",
    fontWeight: "700",
  },
});

export default HistoryScreen;
