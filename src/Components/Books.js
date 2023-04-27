
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Books.css";
import "../Css/Book2.css";
import Book from "./BookDetails";
import { getBookRoutes } from "../Features/apiHelpers";



const Books = (props) => {
  const [books, setBooks] = useState();
  
  
  
  const fetchHandler = async () => {
    // after we get the data from the url 0f getBookRoutes
    return await axios
      .get(getBookRoutes)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    //  render the datavariable using .then to get response
  };
  // useeffect is used to render the component when ever it triggers first time
  useEffect(() => {
    fetchHandler()
      // what ever we render as in map function  we would give in the use State props of parameters
      .then((data) => setBooks(data.books));
  }, []);
  console.log(books);

  return (
  <div className="book-controll">
     
        {books &&
          books.map((book, index) => (
            <div className="card" key={index}>
              <Book book={book} />
            </div>
          ))}
      
  </div>
  );
};

export default Books;


