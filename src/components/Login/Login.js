import React, { useState } from "react";
import { TextField, Checkbox, FormControlLabel } from "@mui/material";
import "../Login/login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, rememberMe: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://raddaf-be.onrender.com/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // alert(`hi ${formData.email} welcome to login`);
        console.log("Login successful:", data);
        Swal.fire({
          icon:"sucess",
          title:"Successfull login",
          text:`Login successfull ${formData.email}`
        })
        // Store agent data in session storage
        sessionStorage.setItem("agentData", JSON.stringify(data.admin));

        navigate("/");
        // Handle successful login, e.g., redirect to another page
      } else {
        console.error("Login failed:", data.error);
        alert("Login failed", data.error);
       
        // Handle failed login, e.g., display an error message
      }
    } catch (error) {
      console.error("Error during login:", error);
    }

    console.log("Login clicked", formData);
    // alert(`hi ${formData.email} welcome to login`);
  };

  return (
    <div className="main-divs">
      <form className="form-contain" onSubmit={handleSubmit}>
        <h2>Admin Login Form</h2>
        <TextField
          variant="filled"
          type="email"
          name="email"
          label="Email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleInputChange}
        />

        <TextField
          variant="filled"
          type="password"
          name="password"
          label="Password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleInputChange}
        />

        <FormControlLabel
          control={
            <Checkbox
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleCheckboxChange}
            />
          }
          label="Remember Me"
        />
        <button variant="contained" type="submit" className="button-admin">
          Login
        </button>
        <div style={{display:"flex",gap:"30px",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
        <p>No Account ?</p>
        <p onClick={()=>navigate("/signup")}>Register Account</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
