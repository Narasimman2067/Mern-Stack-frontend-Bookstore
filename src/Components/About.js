import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import "../Css/About.css";

function About() {
  return (
    <Container>
      <Box className="about">
        <h2 className="typo">
          This is a Crud operation project{" "}
          <span className="book">Bookstore</span>{" "}
        
          <h3 className="typo2">By MERN Stack</h3></h2>
        <ul
          style={{
            display: "flex",
            backgroundColor: "orangered",
            flexDirection: "Column",
            borderRadius: "2rem",
            border: "5px solid white",
            listStyle: "none",
            padding: "5px",
          }}
        >
          <h2 style={{ textTransform: "uppercase", fontSize: "3rem", }}>
            For Educational Purpose
          </h2>
          <div
            style={{
              display: "flex",
              color: "white",
              flexDirection: "Column",
              gap: "2rem",
              fontSize: "2rem",
            }}
          >
            <li>
              You can{" "}
              <mark style={{ borderRadius: "5px", padding: "0.5rem 3rem" }}>
                Create
              </mark>{" "}
              the Data of Books
            </li>
            <li>
              You can{" "}
              <mark style={{ borderRadius: "5px", padding: "0.5rem 3rem" }}>
                get
              </mark>{" "}
              the Data from the backend
            </li>
            <li>
              You can{" "}
              <mark style={{ borderRadius: "5px", padding: "0.5rem 3rem" }}>
                Update
              </mark>{" "}
              the Data of Books
            </li>
            <li>
              You can{" "}
              <mark style={{ borderRadius: "5px", padding: "0.5rem 2rem" }}>
                Delete
              </mark>{" "}
              the Data of Books
            </li>
          </div>
        </ul>
        
      </Box>
    </Container>
  );
}

export default About;

const Container = styled.div`
  padding-top: 0rem;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb15
  );
  height: auto !important;
`;
