import axios from "axios";

const API_URL = "https://api.github.com/graphql";
const API_TOKEN = "a5193f22c0da443adcfdb8770ad8b16910587687";

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
