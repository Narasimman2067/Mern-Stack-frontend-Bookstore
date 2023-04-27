import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import AddBooks from "./Components/AddBooks";
import Books from "./Components/Books";
import About from "./Components/About";
import React from "react";
import styled from "styled-components";
import BookViewDetails from "./Components/BookViewDetails";


function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Routes>
         
          
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBooks />} exact />
          <Route path="/get" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/edit/:_id" element={<BookViewDetails />} exact />
         
        </Routes>
      </Container>
    </React.Fragment>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: auto;

  position: absolute;
  top: 4rem;
`;
