import React from "react";
import { View, Text, Dimensions } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

const ScannedListItem = () => {
  return (
    <Swipeable
      friction={2}
      leftThreshold={50}
      enableTrackpadTwoFingerGesture
      renderLeftActions={LeftAction}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          height: 75,
          width: width * 0.9,
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 20,
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <View
          style={{
            flex: 0.1,
            alignItems: "center",
          }}
        >
          <FontAwesome name="star-o" size={24} color="#d13060" />
        </View>
        <View style={{ flex: 0.8, paddingLeft: 10 }}>
          <Text style={{ fontWeight: "bold" }}>QR-Code</Text>
          <Text>Test Slider</Text>
        </View>
        <View
          style={{
            flex: 0.1,
            alignItems: "center",
          }}
        >
          <Ionicons name="ios-arrow-forward" size={24} color="#d13060" />
        </View>
      </View>
    </Swipeable>
  );
};

const LeftAction = () => {
  return (
    <View
      style={{
        backgroundColor: "#d13060",
        justifyContent: "center",
        alignItems: "center",
        width: 50,
      }}
    >
      <MaterialIcons name="delete" size={24} color="white" />
    </View>
  );
};

export default ScannedListItem;
