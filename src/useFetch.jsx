import { useState, useEffect } from "react";

const useFetch = (url)=>{
 const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { 
   
    let isMouted = true;
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Eroor server: ${response.status}`);
        }

        const result = await response.json();

        if (isMouted) {
          setData(result);
          setLoading(false);
        }
      } catch (error) {
        if (isMouted) {
          setError(error);
          setLoading(false);
        }
        
      }
    };

    fetchData();

    return ()=> {
     isMouted = false;
    }
   
  }, [url]);

   return {data, loading, error}

}
export default useFetch