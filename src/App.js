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
import ControllBook from "./Components/ControllPallete";


function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Routes>
          {/* <Route path="/getbooks" element={<ControllBook />} exact /> */}
          
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBooks />} exact />
          <Route path="/get" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/edit/:_id" element={<BookViewDetails />} exact />
          <Route path="/getbooks" element={<ControllBook />} exact />
        </Routes>
      </Container>
    </React.Fragment>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: auto;
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(1, 20, 124),
    rgb(0, 0, 253),
    rgb(12, 10, 105)
  );
  position: absolute;
  top: 4rem;
`;
