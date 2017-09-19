import { SANDBOX_TOKEN } from "../env.js";

let token,
  hostname = window && window.location && window.location.hostname,
  env = process && process.env && process.env.NODE_ENV;

if (env && env === "production") {
  require("dotenv").config();
  token = process.env.REACT_APP_API_TOKEN;
} else if (/sandbox.io$/.test(hostname) || (env && env === "development")) {
  token = SANDBOX_TOKEN;
} else {
  token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
}
console.log(token);
export const API_TOKEN = token;
