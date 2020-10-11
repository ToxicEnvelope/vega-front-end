import { SecureStore } from "expo";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import LoginViewComponent from "./components/LoginView/loginViewComponent";
import NoTokenView from "./components/NoTokenView/NoTokenViewComponent";
import HomeView from "./components/homeView/homeViewComponent";

const AppView = (props) => {
  const [hasToken, setToken] = useState(true);

  useState(() => {
    // get token from store
    const token = null;
    setToken(token);
    console.log("Token: " + token);
  });

  switch (hasToken) {
    case true:
      return (
        <>
          <HomeView></HomeView>
        </>
      );
    case false:
      return (
        <>
          <LoginViewComponent></LoginViewComponent>
        </>
      );
    default:
      return (
        <>
          <NoTokenView></NoTokenView>
        </>
      );
  }
};

export default function App() {
  return (
    <View>
      <AppView></AppView>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
