import { SANDBOX_GITHUB_TOKEN } from "../env.js";

let token,
  hostname = window && window.location && window.location.hostname,
  env = process && process.env && process.env.NODE_ENV;

if (env && env === "production") {
  require("dotenv").config();
  token = process.env.REACT_APP_API_TOKEN;
} else if (/sandbox.io$/.test(hostname) || (env && env === "development")) {
  token = SANDBOX_GITHUB_TOKEN;
} else {
  token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
}

const GITHUB_API_TOKEN = token;
const STACK_API_VERSION = "2.2";
const STACK_API_USER = "5545602";
const STACK_API_KEY = "GlpXVX*5omJk)MD4XAzTKQ(("

export { GITHUB_API_TOKEN, STACK_API_VERSION, STACK_API_USER, STACK_API_KEY };
