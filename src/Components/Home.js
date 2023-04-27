import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import  styled from 'styled-components';

function Home() {
  return (
    <Container>
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
    </Container>
  );
}

export default Home;


const Container =styled.div`
background-image:url("https://i.pinimg.com/originals/8a/13/52/8a13524dc09a8efb9da159cb912c8c5b.jpg");
background-position:center;
object-fit:cover;
// width:100vw !important;
background-repeat:no-repeat;
background-size:cover;

`