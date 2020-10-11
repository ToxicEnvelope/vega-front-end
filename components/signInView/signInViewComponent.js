import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AuthService from "../../services/authService";
import HomeView from "../homeView/homeViewComponent";
import LoginView from "../loginView/loginViewComponent";

const SignInView = (props) => {
  const [state, setState] = useState({
    regForm: {
      fn: null,
      ln: null,
      dob: null,
      email: null,
      password: null,
      confirmPassword: null,
    },
    workflow: null,
  });

  useState(() => {
    state["workflow"] = -1;
    setState(state);
  });

  const firstNameChangeHandler = (event) => {
    let value = event.target.value;
    state["regForm"]["fn"] = value;
    setState(state);
    console.log("First Name updated");
  };

  const lastNameChangeHandler = (event) => {
    let value = event.target.value;
    state["regForm"]["ln"] = value;
    setState(state);
    console.log("Last Name updated");
  };

  const emailChangeHandler = (event) => {
    let value = event.target.value;
    state["regForm"]["email"] = value;
    setState(state);
    console.log("Email updated");
  };

  const passwordChangeHandler = (event) => {
    let value = event.target.value;
    state["regForm"]["password"] = value;
    setState(state);
    console.log("Password updated");
  };

  const confirmPasswordChangeHandler = (event) => {
    let value = event.target.value;
    state["regForm"]["confirmPassword"] = value;
    setState(state);
    console.log("Confirm Password updated");
  };

  const makeRegistrationHandler = async () => {
    try {
      const pass = state.regForm.password;
      const confirm = state.regForm.confirmPassword;
      if (pass === confirm) {
        console.log("Passwords Matches!");
      } else {
        console.error("Passwords doesn't matches");
        return;
      }
      const registerObject = {
        userEmail: state.regForm.email,
        userFullName: `${state.regForm.fn} ${state.regForm.ln}`,
        userPassword: state.regForm.password,
      };
      const response = await new AuthService().register(registerObject);
      if (response.status === 200 && response.data.callback.token !== null) {
        console.log("Registration Completed!");
        state.workflow = 1;
        setState(state);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const loginUserChangeHandler = () => {
    const _state = {
      regForm: {
        fn: null,
        ln: null,
        dob: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
      workflow: 2,
    };
    setState(_state);
  };

  const workflow = state["workflow"];
  switch (workflow) {
    case 2:
      return (
        <>
          <LoginView></LoginView>
        </>
      );
    case 1:
      return (
        <>
          <HomeView></HomeView>
        </>
      );
    default:
      return (
        <>
          <Text>Create CoTherapist Account</Text>
          <br />
          <>
            First Name:{" "}
            <input
              type="text"
              placeholder="first name"
              onChange={firstNameChangeHandler}
            />
            Last Name:{" "}
            <input
              type="text"
              placeholder="last name"
              onChange={lastNameChangeHandler}
            />
            Email:{" "}
            <input
              type="email"
              placeholder="alias@domain.ext"
              onChange={emailChangeHandler}
            />
            Password:{" "}
            <input
              type="password"
              placeholder="password"
              onChange={passwordChangeHandler}
            />
            Confirm Password:{" "}
            <input
              type="password"
              placeholder="confirm password"
              onChange={confirmPasswordChangeHandler}
            />
            <br />
            <button type="submit" onClick={makeRegistrationHandler}>
              Create
            </button>
            .
            <a onClick={loginUserChangeHandler} href="#login">
              login
            </a>
          </>
        </>
      );
  }
};

export default function SignInViewComponent() {
  return (
    <>
      <SignInView></SignInView>
    </>
  );
}

const styles = StyleSheet.create({});
