import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NoTokenView from "../noTokenView/noTokenViewComponent";
import AuthService from "../../services/authService";

const ForgotMyPasswordView = (props) => {
  const [state, setState] = useState({
    workflow: null,
    emailToResetPassword: null,
  });

  useState(() => {
    const _state = {
      workflow: 0,
      emailToResetPassword: null,
    };
    setState(_state);
  });

  const notokenUserChangeHandler = () => {
    const _state = {
      workflow: 1,
      emailToResetPassword: null,
    };
    setState(_state);
  };

  const emailToRestUserChangeHandler = (event) => {
    let value = event.target.value;
    state.emailToResetPassword = value.toLowerCase();
    setState(state);
  };

  const resetPasswordSubmitedUserChangeHandler = async () => {
    const userObject = {
      email: state.emailToResetPassword,
    };
    const response = await new AuthService().resetPassword(userObject);
  };

  const workflow = state.workflow;
  switch (workflow) {
    case 1:
      return (
        <>
          <NoTokenView></NoTokenView>
        </>
      );
    case 0:
      return (
        <>
          <Text>Forgot your password?</Text>
          Enter your email to reset your password
          <input
            type="email"
            placeholder="alias@domain.ext"
            onChange={emailToRestUserChangeHandler}
          />
          <br />
          <button
            type="submit"
            onClick={resetPasswordSubmitedUserChangeHandler}
          >
            Reset
          </button>
          .
          <a href="#no-token" onClick={notokenUserChangeHandler}>
            users page
          </a>
        </>
      );
    default:
      return (
        <>
          <Text>Forgot your password?</Text>
          Enter your email to reset your password
          <input
            type="email"
            placeholder="alias@domain.ext"
            onChange={emailToRestUserChangeHandler}
          />
          <br />
          <button
            type="submit"
            onClick={resetPasswordSubmitedUserChangeHandler}
          >
            Reset
          </button>
          .
          <a href="#no-token" onClick={notokenUserChangeHandler}>
            users page
          </a>
        </>
      );
  }
};

export default function ForgotMyPasswordViewComponent() {
  return (
    <>
      <ForgotMyPasswordView></ForgotMyPasswordView>
    </>
  );
}
