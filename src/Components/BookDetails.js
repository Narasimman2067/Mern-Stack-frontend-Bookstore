import { Button } from "@mui/material";
import React from "react";
import "../Css/Books.css";
import "../Css/Book2.css";
import { Link } from "react-router-dom";
import axios from "axios";

export function Book(props) {
  // destructure the value to get from backend to store in props
  const { _id, author, bookname, price, description, image } = props.book;

  const deleteBook = async () => {
    await axios
      .delete(`http://localhost:8000/books/delete/${_id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return (
    <div className="controll-booklist">
      <div className="card-booklist">
        <img src={image} alt={bookname} />
        <h1 className="main-title">
          <b>Title :</b> <span className="title">{bookname}</span>
        </h1>
        <article>
          <b>Author :</b>
          <span>{author}</span>{" "}
        </article>
        <p>
          <b>Description :</b>
          <span>{description}</span>
        </p>
        <h3>
          <b>Price :</b> <span>{price}</span>
          <b>Rs</b>
        </h3>
      </div>
      <div className="btn-grp">
        <Button
          LinkComponent={Link}
          to={`/edit/${_id}`}
          variant="contained"
          color="secondary"
        >
          Update
        </Button>
        <a href="/get">
          <Button
            onClick={() => deleteBook()}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </a>
      </div>
    </div>
  );
}
export default Book;
