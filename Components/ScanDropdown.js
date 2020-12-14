import React from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

const { width } = Dimensions.get("screen");

const ScanDropdown = ({ type, data, animateY, onClose }) => {
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: animateY }] }]}
    >
      <View>
        <Text style={{ fontWeight: "bold" }}>Visit this website?</Text>
        <Text>{data}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableWithoutFeedback onPress={onClose}>
          <Text style={{ fontWeight: "bold", color: "#d13060" }}>Close</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text style={{ fontWeight: "bold", color: "#d13060" }}>Search</Text>
        </TouchableWithoutFeedback>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 130,
    backgroundColor: "white",
    position: "absolute",
    justifyContent: "space-between",
    padding: 20,
    top: 0,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ScanDropdown;
