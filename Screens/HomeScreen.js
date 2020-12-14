import { Ionicons } from "@expo/vector-icons";
import { AdMobBanner } from "expo-ads-admob";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Dimensions, Animated, StyleSheet } from "react-native";
import RoundActionButton from "../Components/RoundActionButton";
import ScanDropdown from "../Components/ScanDropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStateValue } from "../StateProvider";

const { height, width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const [{ history, favorites }, dispatch] = useStateValue();

  const [hasPermission, setHasPermission] = useState(null);
  const [toggleFlash, setToggleFlash] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [scannedData, setScannedData] = useState("");
  const animateY = useRef(new Animated.Value(-130)).current;

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setShowNotification(true);
    setScannedData(type);
    Animated.timing(animateY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const handleOnClose = () => {
    setShowNotification(false);
    animateY.resetAnimation();
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        ratio="16:9"
        style={StyleSheet.absoluteFillObject}
        flashMode={toggleFlash ? "torch" : "off"}
      />
      <View style={[StyleSheet.absoluteFillObject, styles.buttonsContainer]}>
        <RoundActionButton
          icon={
            <Ionicons
              name={toggleFlash ? "ios-flash" : "ios-flash-off"}
              size={20}
              color="white"
            />
          }
          diameter={50}
          onPress={() => setToggleFlash(!toggleFlash)}
        />
        <RoundActionButton
          icon={<Ionicons name="md-qr-scanner" size={40} color="white" />}
          diameter={100}
          onPress={() => setScanned(false)}
        />
        <RoundActionButton
          icon={<Ionicons name="ios-stats" size={20} color="white" />}
          diameter={50}
          onPress={() => navigation.navigate("History")}
        />
      </View>
      <AdMobBanner
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        style={[StyleSheet.absoluteFillObject, { top: height - 90 }]}
      />
      {showNotification && (
        <ScanDropdown
          animateY={animateY}
          onClose={handleOnClose}
          data={scannedData}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    top: height - 230,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 100,
  },
});

export default HomeScreen;
