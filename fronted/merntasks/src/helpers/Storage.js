import CONFIG from "../services/config";

class TokenStorage {
  static add(token) {
    localStorage.setItem(CONFIG.ACCESS_TOKEN, token);
  }
  static remove() {
    localStorage.removeItem(CONFIG.ACCESS_TOKEN);
  }
  static get() {
    return localStorage.getItem(CONFIG.ACCESS_TOKEN);
  }
}

class AuthStorage {
  static add(user) {
    localStorage.setItem(CONFIG.USER_TOKEN, user);
  }
  static remove() {
    localStorage.removeItem(CONFIG.USER_TOKEN);
  }
  static get() {
    try {
      return JSON.parse(localStorage.getItem(CONFIG.USER_TOKEN));
    } catch (e) {
      return null;
    }
  }
}
export default {
  Auth: AuthStorage,
  Token: TokenStorage,
};
