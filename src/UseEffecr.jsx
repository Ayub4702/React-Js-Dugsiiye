import { useEffect, useState } from "react";

function useEffecr() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    document.title = name === "" ?  "welcome!" : greeting+  ", " + name;
  }, [name]);

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="greeting"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />
    </div>
  );
}

export default useEffecr;
