/* import { SANDBOX_GITHUB_TOKEN } from "../env.js";

let token,
    hostname = window && window.location && window.location.hostname,
    env = process && process.env && process.env.NODE_ENV;

if (env && env === "production") {
    require("dotenv").config();
    token = process.env.REACT_APP_API_TOKEN;
} else if (/sandbox.io$/.test(hostname) || env && env === "development") {
    token = SANDBOX_GITHUB_TOKEN;
} else {
    token = "2be57f89e1506f3aedde2be89ce38a6369c92f49";
}*/

const GITHUB_API_TOKEN = "ecfd105b2cea07256456e189f3e302fcbf10164c",
    STACK_API_VERSION = "2.2",
    STACK_API_USER = "5545602",
    STACK_API_KEY = "GlpXVX*5omJk)MD4XAzTKQ((";

export { GITHUB_API_TOKEN, STACK_API_VERSION, STACK_API_USER, STACK_API_KEY };
