import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Button, CircularProgress } from "@mui/material";
import '../index.css'
import axios from "axios";
const userInfo = JSON.parse(localStorage.getItem("userInfo"));


const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const logoutHandler = async() =>{
    setLoading(true);
    try {
      // Make a request to the server to log out the user
      await axios.post('/logout');

      // Clear the saved cookies on the client-side
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      localStorage.removeItem("userInfo");
      setLoading(false);
      navigate('/login')
      toast.success("Logged out successfully")
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1> hello {userInfo.name}</h1>
      <Button onClick={logoutHandler}>
      {
        (loading)?(<CircularProgress size="1.6rem" color='inherit'/>):"Logout"
      }
      </Button>
    </div>
  )
}

export default Dashboard
