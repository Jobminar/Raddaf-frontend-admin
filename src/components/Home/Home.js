import "./home.css";
import { useNavigate } from "react-router-dom";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LandscapeOutlinedIcon from "@mui/icons-material/LandscapeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import OfflinePinOutlinedIcon from "@mui/icons-material/OfflinePinOutlined";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";

import { Card, IconButton, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Data } from "../../Provider";

const Homeagent = () => {
  const { agents, isLoading, error } = useContext(Data);
  const navigate = useNavigate();
  const Clients = 24;
  const MyAzents = 10;
  const MyAppointment = 24;
  const Landlords = 5;
  const Tenants = 20;
  const Others = 30;

  const Valuation = 10;
  const Listingrequestclient = 7;
  const Agreementscount = 34;

  const [showMap, setShowMap] = useState({});

  const handleIconClick = (id) => {
    setShowMap((prevShowMap) => ({
      ...prevShowMap,
      [id]: !prevShowMap[id],
    }));
  };

  return (
    <>
      <div className="home-con">
        <div className="main-con">
          <div className="my-links">
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <Person2OutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/myclients");
                }}
              >
                <h1>Clients</h1>
                <p>{Clients}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <LocationOnOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/myagents");
                }}
              >
                <h1>My Agents</h1>
                <p>{MyAzents}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <CalendarMonthOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/appointments");
                }}
              >
                <h1>My Appointments</h1>
                <p>{MyAppointment}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <LandscapeOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/mylandlords");
                }}
              >
                <h1>Landlords</h1>
                <p>{Landlords}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <PeopleOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/mytenats");
                }}
              >
                <h1>Tenants</h1>
                <p>{Tenants}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <Diversity1OutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/others");
                }}
              >
                <h1>Others</h1>
                <p>{Others}</p>
              </div>
            </div>
          </div>
          <div className="my-own">
            <p
              onClick={() => {
                navigate("/myrentalrequests");
              }}
            >
              My Rental{" "}
            </p>
            <p
              onClick={() => {
                navigate("/listaproperty");
              }}
            >
              List a Properties
            </p>
            <p
              onClick={() => {
                navigate("/mylistedproperties");
              }}
            >
              My Listed Properties
            </p>
            {/* <p>My Valuation Request</p> */}
          </div>
          <div className="my-links">
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <OfflinePinOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/valuationrequest");
                }}
              >
                <h1>Valuation Request</h1>
                <p>{Valuation}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <ChecklistRtlOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>

              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/listingrequest");
                }}
              >
                <h1>Listing Request</h1>
                <p>{Listingrequestclient}</p>
              </div>
            </div>
            <div className="my-sub-links">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "3.5rem",
                  width: "3.5rem",
                  background: "#FFD2B1",
                  borderRadius: "50px",
                }}
              >
                <ClassOutlinedIcon
                  style={{ fontSize: "40px", color: "#955108" }}
                />
              </div>
              <div
                className="my-sub-links-content"
                onClick={() => {
                  navigate("/agreements");
                }}
              >
                <h1>Agreements</h1>
                <p>{Agreementscount}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="message-con">
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              background: "#FEFCF8",
              borderRadius: "10px",
            }}
          >
            <h2 style={{ color: "#955108", textAlign: "center" }}>
              agents Messages
            </h2>

            {agents.map((ele, ind) => {
              return (
                <div key={ind} style={{ marginLeft: "10px" }}>
                  <div>{ele.Username}</div>
                  <div>{ele.email}</div>

                  <div>
                    {showMap[ele._id] ? (
                      <TextField label="Message" />
                    ) : (
                      <>
                        <IconButton onClick={() => handleIconClick(ele._id)}>
                          <MailOutlineIcon />
                        </IconButton>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </Card>
        </div>
      </div>
    </>
  );
};
export default Homeagent;
