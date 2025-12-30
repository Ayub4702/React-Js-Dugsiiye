import { useState, useEffect } from "react";

function PokemanApi() {
  const [userData, setuserData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.error("Error fetching Github user: ", error);
  }, [error]);

  const handleSearch = async () => {
    if (!userInput.trim() === "") return;
    setLoading(true);
    setError('')
    setuserData(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch(
        `https://api.github.com/users/${userInput}`
      );

      if (!response.ok) {
        throw new Error("Github user not found");
      }
      const data = await response.json();
      setuserData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Api Github"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <button onClick={handleSearch}>search</button>

      {loading && <p>loading....</p>}

      {userData && (
        <div>
          <h3>{userData.name || userData.loging}</h3>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <p>Location: {userData.location || "N/A"}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default PokemanApi;
