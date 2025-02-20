import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://scool-backend.onrender.com/";

function App() {
  const [flask, setFlask] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setFlask(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello World Phani</h1>
      {flask && <p>Data from Flask: {JSON.stringify(flask)}</p>}
    </div>
  );
}

export default App;
