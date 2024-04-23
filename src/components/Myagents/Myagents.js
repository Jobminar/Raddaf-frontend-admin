import React, { useEffect, useState } from "react";
import '../Myagents/myagents.css'
import { Card, FormControl, MenuItem, Select } from "@mui/material";

const MyAgents = () => {
  const [selectedZone, setSelectedZone] = useState("Z1");
  const [nonVerifiedData, setNonVerifiedData] = useState(null);
  const [verifiedData, setVerifiedData] = useState(null);

  const adminZones = ["Z1", "Z2", "Z3", "Z4", "Z5"];

  const handleVerify = async (email) => {
    try {
      const response = await fetch(
        "https://raddaf-be.onrender.com/admin/approveAgent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            verifiedStatus: true,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedNonVerifiedData = nonVerifiedData.map((agent) =>
        agent.email === email ? { ...agent, verified: true } : agent
      );

      setNonVerifiedData(updatedNonVerifiedData);
    } catch (error) {
      console.error("Error verifying agent:", error);
    }
  };

  useEffect(() => {
    const fetchNonVerifiedData = async () => {
      try {
        const response = await fetch(
          "https://raddaf-be.onrender.com/admin/getAgentList",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ adminZones: [selectedZone] }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const dataFromServer = await response.json();
        setNonVerifiedData(dataFromServer.result);
      } catch (error) {
        console.error("Error fetching non-verified data:", error);
      }
    };

    fetchNonVerifiedData();
  }, [selectedZone]);

  useEffect(() => {
    const fetchVerifiedData = async () => {
      try {
        const response = await fetch(
          "https://raddaf-be.onrender.com/admin/agents/verified",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const dataFromServer = await response.json();
  
        // Ensure that dataFromServer.result is an array
        if (Array.isArray(dataFromServer.result)) {
          setVerifiedData(dataFromServer.result);
        } else {
          console.error("Invalid data received from the server:", dataFromServer);
        }
      } catch (error) {
        console.error("Error fetching verified data:", error);
      }
    };
  
    fetchVerifiedData();
  }, []);
  

  return (
    <div className="myagent-main">
      <div className="no-verify-agents">
        <h2 style={{color:"red"}}>Non Verified Agent List</h2>
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            background: "#9E5C08",
            color: "white",
            width: "20%",
          }}
        >
          <Select
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {adminZones.map((zone) => (
              <MenuItem key={zone} value={zone}>
                {zone}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {nonVerifiedData && (
          <div>
            {nonVerifiedData.map((agent) => (
              <div key={agent._id}>
                <div>
                  <strong>Username:</strong> {agent.Username}
                </div>
                <div>
                  <p>
                    <strong>Email:</strong> {agent.email}
                  </p>
                  <p>
                    <strong>Title:</strong> {agent.title}
                  </p>
                  <p>
                    <strong>Zone Number:</strong> {agent.zoneNumber}
                  </p>
                  <p>
                    <button
                      className="verify-button"
                      onClick={() => handleVerify(agent.email)}
                      disabled={agent.verified}
                    >
                      {agent.verified ? "Verified" : "Verify"}
                    </button>
                  </p>
                  <div>
                    <img
                      src={`data:image/jpeg;base64,${agent.profileImage}`}
                      alt="Agent Profile"
                      style={{ width: "50%", height: "50%" }}
                      onError={(e) => {
                        e.target.src = "fallback-image-url";
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="verified-agents">
        <h2 style={{color:"green"}}>Verified Agents List</h2>
        {verifiedData && (
          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            {verifiedData.map((agent) => (
              <div key={agent._id} >
                <Card sx={{background:"#DBA259"}}>
                  <p>
                  <strong>Username:</strong> {agent.Username}
                  </p>
                  <p>
                    <strong>Email:</strong> {agent.email}
                  </p>
                  <p>
                    <strong>Title:</strong> {agent.title}
                  </p>
                  <p>
                    <strong>Zone Number:</strong> {agent.zoneNumber}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAgents;
