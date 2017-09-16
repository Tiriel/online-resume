import axios from "axios";

const API_URL = "https://api.github.com/graphql";
const API_TOKEN = "1d0b0bbdbfdef9608463458cb650fbe2c08ffac6";

function getUser(user) {
  let gUser = {
    query:
      '{ user(login: "tiriel") { id name avatarUrl bio repositories { totalCount } contributedRepositories { totalCount } pinnedRepositories(first: 6) { nodes { id name description url languages(first: 6) { edges { node { color name } size }}}} gists(first: 9) { totalCount nodes { id name description }} organizations(first: 3) { totalCount nodes { id name url avatarUrl description}}}}'
  };

  return axios.post(API_URL, JSON.stringify(gUser), {
    headers: { Authorization: "Bearer " + API_TOKEN }
  });
}

export { getUser };
