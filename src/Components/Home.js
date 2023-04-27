import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <Box display="flex" flexDirection={"column"} alignItems={"center"}>
       
       <h3 style={{ color:"white",marginTop:"5rem",fontSize:"40px" }}>Welcome To Our App</h3>
       
       
        <Button
        LinkComponent={Link}
        to="/get"
        variant="contained"
        color="primary"
        sx={{
            marginTop: "10rem",
            bgcolor: "orangeRed",
            color: "white",
            borderRadius: "1rem",
           
          }}
        >
          <Typography variant="h3">View All Books</Typography>
        </Button>
      </Box>
    </div>
  );
}

export default Home;
