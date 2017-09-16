import axios from "axios";

const API_URL = "https://api.github.com/graphql";
const API_TOKEN = "7a92319b25e7c7e0408af12bfe60e2764bb95652";

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
