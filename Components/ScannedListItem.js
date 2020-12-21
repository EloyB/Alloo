import React from "react";
import { View, Text, Dimensions } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useStateValue } from "../StateProvider";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("screen");

const ScannedListItem = ({ id, type, data, favorite }) => {
  const [{ history }, dispatch] = useStateValue();

  const removeItem = async () => {
    dispatch({
      type: "REMOVE_HISTORY_ITEM",
      id: id,
    });

    await AsyncStorage.getItem("@History_List", (error, result) => {
      const parsedResult = JSON.parse(result);
      const index = parsedResult.findIndex((x) => x.id === id);
      parsedResult.splice(index, 1);
      AsyncStorage.setItem("@History_List", JSON.stringify(parsedResult));
    });
  };

  const toggleFavorite = async () => {
    await AsyncStorage.getItem("@History_List", (error, result) => {
      const parsedResult = JSON.parse(result);
      console.log(
        parsedResult.find((item) => {
          return item.id == id;
        })
      );
    });
  };

  const LeftAction = () => {
    return (
      <TouchableWithoutFeedback onPress={removeItem}>
        <View
          style={{
            backgroundColor: "#d13060",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 75,
          }}
        >
          <MaterialIcons name="delete" size={24} color="white" />
        </View>
      </TouchableWithoutFeedback>
    );
  };

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
          marginBottom: 20,
        }}
      >
        <TouchableWithoutFeedback onPress={toggleFavorite}>
          <View
            style={{
              width: width * 0.9 * 0.1,
              alignItems: "center",
            }}
          >
            <FontAwesome
              name={favorite ? "star" : "star-o"}
              size={24}
              color="#d13060"
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={{ flex: 0.8, paddingLeft: 10 }}>
          <Text style={{ fontWeight: "bold" }}>
            {type == 32 ? "Barcode" : "QR Code"}
          </Text>
          <Text>{data}</Text>
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

export default ScannedListItem;
