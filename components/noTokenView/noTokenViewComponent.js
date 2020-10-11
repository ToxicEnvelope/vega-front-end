import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import LoginViewComponent from "../loginView/loginViewComponent";
import SignInComponent from "../signInView/signInViewComponent";

const NoTokenView = (props) => {
  const [flowState, setFlowState] = useState(0);

  useState(() => {
    const _state = null;
    setFlowState(_state);
    console.log("Flow State: " + _state);
  });

  const onClickLoginEvent = () => {
    const _state = 1;
    setFlowState(_state);
    console.log("Flow State: " + _state);
    return;
  };

  const onCreateAccountEvent = () => {
    const _state = 2;
    setFlowState(_state);
    console.log("Flow State: " + _state);
    return;
  };

  switch (flowState) {
    case 1:
      return (
        <>
          <LoginViewComponent></LoginViewComponent>;
        </>
      );
    case 2:
      return (
        <>
          <SignInComponent></SignInComponent>
        </>
      );
    default:
      return (
        <>
          <Text>No Token View</Text>
          <br></br>
          <button
            data-uat="NoTokenView:login-button"
            onClick={onClickLoginEvent}
            style={{
              background: "green",
              color: "white",
              marginTop: "5px",
              padding: "5px",
            }}
          >
            Log In
          </button>
          <br></br>
          <button
            data-uat="NoTokenView:signin-button"
            onClick={onCreateAccountEvent}
            style={{
              background: "blue",
              color: "white",
              marginTop: "5px",
              padding: "5px",
            }}
          >
            Sign In
          </button>
        </>
      );
  }
};

export default function NoTokenViewComponent() {
  return (
    <>
      <NoTokenView></NoTokenView>
    </>
  );
}

const styles = StyleSheet.create({});
