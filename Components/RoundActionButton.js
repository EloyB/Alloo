import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

const RoundActionButton = ({ icon, diameter, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width: diameter,
          height: diameter,
          backgroundColor: "#d13060",
          borderRadius: diameter / 2,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 5,
        }}
      >
        {icon}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RoundActionButton;
