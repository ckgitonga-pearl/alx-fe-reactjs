import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [form, setForm] = useState({
    username: "",
    location: "",
    minRepos: "",
  });
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = async (reset = true) => {
    setLoading(true);
    setError(false);

    try {
      const data = await searchUsers({
        ...form,
        page: reset ? 1 : page + 1,
      });

      setResults(reset ? data.items : [...results, ...data.items]);
      setPage(reset ? 1 : page + 1);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(true);
  };

  return (
    <div className="max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid gap-3 bg-white p-4 rounded shadow"
      >
        <input
          name="username"
          placeholder="Username"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="Location"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="minRepos"
          type="number"
          placeholder="Min Repositories"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <button className="bg-black text-white py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4">Looks like we cant find the user</p>}

      <ul className="mt-6 space-y-4">
        {results.map((user) => (
          <li key={user.id} className="flex items-center gap-4 border p-3 rounded">
            <img src={user.avatar_url} alt="" className="w-16 rounded-full" />
            <div>
              <p className="font-bold">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                View Profile
              </a>
            </div>
          </li>
        ))}
      </ul>

      {results.length > 0 && (
        <button
          onClick={() => handleSearch(false)}
          className="mt-4 w-full border py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;