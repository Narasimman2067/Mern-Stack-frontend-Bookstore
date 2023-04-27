
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Books.css";
import "../Css/Book2.css";
import Book from "./BookDetails";
import { getBookRoutes } from "../Features/apiHelpers";



const ControllBook = (props) => {
  const [controlls, setControlls] = useState();
  
  
  
  const ControllHandler = async () => {
    // after we get the data from the url 0f getBookRoutes
    return await axios
      .get(`http://localhost:8000/books/get`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    //  render the datavariable using .then to get response
  };
  // useeffect is used to render the component when ever it triggers first time
  useEffect(() => {
    ControllHandler()
      // what ever we render as in map function  we would give in the use State props of parameters
      .then((data) => setControlls(data.controlls));
  }, []);
  console.log(controlls);

  return (
  <div className="book-controll">
     
        {controlls &&
          controlls.map((controll, index) => (
            <div className="card" key={index}>
              <Book book={controll} />
            </div>
          ))}
      
  </div>
  );
};

export default ControllBook;
