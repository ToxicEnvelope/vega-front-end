import axios from "axios";

export default class AuthService {
  authenticate = async (authObject) => {
    let response = await axios.post(
      "http://localhost:5443/api/v1/accounts/login",
      authObject
    );
    return response;
  };

  register = async (userObject) => {
    const response = await axios.post(
      "http://localhost:5443/api/v1/accounts/sign-in",
      userObject
    );
    return response;
  };

  resetPassword = async (userObject) => {
    const response = await axios.post(
      "http://localhost:5443/api/v1/accounts/reset-password",
      userObject
    );
    return response;
  };
}
