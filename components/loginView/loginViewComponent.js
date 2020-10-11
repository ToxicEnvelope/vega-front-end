import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import HomeView from "../homeView/homeViewComponent";
import SignInView from "../signInView/signInViewComponent";
import ForgotMyPasswordView from "../forgotMyPasswordView/forgotMyPasswordComponent";
import AuthService from "../../services/authService";

const LoginView = (props) => {
  const [state, setState] = useState({
    auth: { userEmail: null, userPassword: null },
    workflow: -1,
  });

  const makeLoginHandler = async () => {
    try {
      let _state = {} || undefined;
      const response = await new AuthService().authenticate(state.auth);
      if (response.status === 200 && response.data.data.token !== null) {
        console.log("Authentication Completed!");
        _state = {
          auth: { userEmail: null, userPassword: null },
          workflow: 1,
        };
      } else {
        _state = {
          auth: { userEmail: null, userPassword: null },
          workflow: 0,
        };
        setState(state);
        console.log("State: " + JSON.stringify(state));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const emailUserChangeHandler = (event) => {
    let value = event.target.value;
    state.auth.userEmail = value.toLowerCase();
    setState(state);
    console.log("Email updated");
  };

  const passwordUserChangeHandler = (event) => {
    let value = event.target.value;
    state.auth.userPassword = value;
    setState(state);
    console.log("Password updated");
  };

  const forgotMyPasswordUserChangeHandler = () => {
    const _state = {
      auth: {
        userEmail: null,
        userPassword: null,
      },
      workflow: 3,
    };
    setState(_state);
    console.log("Loading Forgot My Password Page...");
  };

  const signInUserChangeHandler = () => {
    const _state = {
      auth: {
        userEmail: null,
        userPassword: null,
      },
      workflow: 2,
    };
    setState(_state);
    console.log("Loading Sign-In Page...");
  };

  const workflow = state["workflow"];
  switch (workflow) {
    case 3:
      return (
        <>
          <ForgotMyPasswordView></ForgotMyPasswordView>
        </>
      );

    case 2:
      return (
        <>
          <SignInView></SignInView>
        </>
      );
    case 1:
      console.log("Login Complete!");
      return (
        <>
          <HomeView></HomeView>
        </>
      );
    case 0:
      console.log("Login Failed!");
      return Alert.prompt("Login", "Authentication Failed!");
    default:
      console.log("Login Page Loaded!");
      return (
        <>
          <Text>Login View</Text>
          <br></br>
          <input
            data-uat="LoginView:email-input"
            placeholder="Email"
            type="email"
            onChange={(event) => {
              emailUserChangeHandler(event);
            }}
          />
          <br></br>
          <input
            data-uat="LoginView:password-input"
            placeholder="Password"
            type="password"
            onChange={(event) => {
              passwordUserChangeHandler(event);
            }}
          />
          <br></br>
          <button
            type="submit"
            style={{ backgroundColor: "green", color: "white" }}
            text="Login"
            onClick={makeLoginHandler}
          >
            Login
          </button>{" "}
          .
          <a
            onClick={forgotMyPasswordUserChangeHandler}
            href="#forgot-my-password"
          >
            forgot my password
          </a>
          .
          <a onClick={signInUserChangeHandler} href="#sign-in">
            sign-in
          </a>
        </>
      );
  }
};

export default function LoginViewComponent() {
  return (
    <>
      <LoginView></LoginView>
    </>
  );
}
