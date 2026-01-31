import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await fetchUserData({ username, location, minRepos });
      setUsers(data.items || []);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <input value={location} onChange={(e) => setLocation(e.target.value)} />
        <input value={minRepos} onChange={(e) => setMinRepos(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar_url} alt={user.login} width="50" />
          <a href={user.html_url} target="_blank" rel="noreferrer">
            {user.login}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Search;