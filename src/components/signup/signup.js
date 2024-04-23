import React, { useState } from "react";
import { CircularProgress, TextField } from "@mui/material";
import "../signup/signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullname: "",
    role: "",
    phoneNo: "",
    adminZones: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Set loading state to true before making the API call

      // Send form data to the backend API
      const response = await axios.post('https://raddaf-be.onrender.com/admin/save', formData);

      // Handle success
      console.log(response.data.message);

      Swal.fire({
        icon: "success",
        title: "Successful signup",
        text: "Signup has been successful",
      });
      navigate("/login");

      // Reset form after successful submission
      setFormData({
        username: "",
        email: "",
        password: "",
        fullname: "",
        role: "",
        phoneNo: "",
        adminZones: [],
      });
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error.message);

      Swal.fire({
        icon: "error",
        title: "Failed to signup",
        text: error.message,
      });
      // Provide any additional error handling here
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <div className="main-signup">
      <form className="form-field1" onSubmit={handleSubmit}>
        <TextField
          className="inputs-sign"
          type="text"
          name="username"
          label="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <TextField
          className="inputs-sign"
          type="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <TextField
          className="inputs-sign"
          type="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <TextField
          className="inputs-sign"
          type="text"
          name="fullname"
          label="Fullname"
          value={formData.fullname}
          onChange={handleChange}
        />

        <TextField
          className="inputs-sign"
          type="text"
          name="role"
          label="Role"
          value={formData.role}
          onChange={handleChange}
        />

        <TextField
          className="inputs-sign"
          type="text"
          name="phoneNo"
          label="Phone Number"
          value={formData.phoneNo}
          onChange={handleChange}
        />

        <TextField
          className="inputs-sign"
          type="text"
          name="adminZones"
          label="Admin Zones"
          value={formData.adminZones}
          onChange={handleChange}
        />

        <button variant="contained" className="buttons-sign" type="submit">
          {loading && <CircularProgress size={24} style={{ marginRight: 8, color: 'white' }} />} Sign Up
        </button>
        <p onClick={()=>navigate("/login")} style={{cursor:"pointer"}}>Already Registred Account ? </p>
      </form>
    </div>
  );
};

export default Signup;