import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [toggleFlash, setToggleFlash] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <View style={styles.container}>
      {toggleFlash && (
        <Camera
          style={{
            width: 1,
            height: 1,
            alignSelf: "stretch",
          }}
          type={type}
          flashMode="torch"
        />
      )}

      <Button
        onPress={() => setToggleFlash(!toggleFlash)}
        title="Turn On"
        color="#841584"
      />
      <AdMobBanner
      bannerSize= "banner"
      adUnitID= "ca-app-pub-3940256099942544/6300978111"
      servePersonalizeAds= {false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
