import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = username ? `${username} in:login` : "";

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await api.get("/search/users", {
    params: {
      q: query.trim(),
      page,
      per_page: 5,
    },
  });

  return response.data;
};