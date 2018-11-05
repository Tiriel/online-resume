import axios from "axios";
import {
  GITHUB_API_TOKEN,
  STACK_API_VERSION,
  STACK_API_USER,
  STACK_API_KEY
} from "./api-config";

const GITHUB_API_URL = "https://api.github.com/graphql";
const STACK_API_URL = "https://api.stackexchange.com";

function getGithubUser() {
  let gUser = '{ user(login: "tiriel") { id name avatarUrl bio repositories { totalCount } repositoriesContributedTo { totalCount } pinnedRepositories(first: 6) { nodes { id name description url languages(first: 6) { edges { node { color name } size }}}} gists(first: 9) { totalCount nodes { id name description }} organizations(first: 3) { totalCount nodes { id name url avatarUrl description}}}}';

  return axios.post(GITHUB_API_URL, {query: gUser}, {
    headers: { Authorization: "Bearer " + GITHUB_API_TOKEN }
  });
}

function getStackUser() {
  let callUrl = `${STACK_API_URL}/${STACK_API_VERSION}/users/${STACK_API_USER}?key=${STACK_API_KEY}&site=stackoverflow`;
  return axios.get(callUrl);
}

export { getGithubUser, getStackUser };
