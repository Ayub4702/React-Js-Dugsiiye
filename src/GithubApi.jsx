import useFetch from "./useFetch";

function GithubApi() {
  const { data, loading, error } = useFetch(
    "https://api.github.com/users/mchamoudadev",
  );

  if (loading) return <h2>loading.....</h2>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
}

export default GithubApi;
