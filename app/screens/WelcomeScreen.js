import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

import AppButton from "../components/AppButton";

import { colors } from "../config/colors";

const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        blurRadius={10}
        source={require("../assets/background.jpg")}
        style={styles.background}
      />
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" primary pressed={() => console.log("Login")} />
        <AppButton title="register" pressed={() => console.log("Register")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    width: 300,
    height: 150,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 30,
  },
  logo: {
    width: 70,
    height: 70,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  buttonsContainer: {
    width: "100%",
    height: "20%",
    position: "absolute",
    bottom: 0,
  },
});

export default WelcomeScreen;
