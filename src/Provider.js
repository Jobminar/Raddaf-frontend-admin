import React, { createContext, useEffect, useState } from 'react';

export const Data = createContext();

const DataProvider = ({ children }) => {
  const [agents, setAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("https://raddaf-be.onrender.com/admin/agents/verified");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.msg === "Success" && Array.isArray(data.result)) {
          setAgents(data.result);
        } else {
          console.log("No agents data found");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgents();
  }, []);

  return (
    <Data.Provider value={{ agents, isLoading, error }}>
      {children}
    </Data.Provider>
  );
};

export default DataProvider;
