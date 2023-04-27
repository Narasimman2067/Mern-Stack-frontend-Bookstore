import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "../Css/AddBook.css";
import axios from "axios"
import { addBookRoutes } from '../Features/apiHelpers';
import {useNavigate} from "react-router-dom"








function AddBooks() {
  // to handle the form use useState to store

const navigate =useNavigate()



  const [inputs, setInputs] = useState({
    image: "",
    bookname: "",
    author: "",
    description: "",
    price: "",
   
  });
 
  const [checked,setChecked] =useState(false)

// import axios to send tte data to backend

//whenever we using post through axios we want to give values of inputs we have
const sendRequest =async()=>{
  await axios.post(addBookRoutes,{
bookname:String(inputs.bookname),
author:String(inputs.author),
description:String(inputs.description),
price:String(inputs.price),
image:String(inputs.image),
available:Boolean(checked)
})
.then((res)=>res.data);
}











  // here we handle the inputs by the usestate
  const handleChange = (e) => {
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
      
    }));
    
  };



  // this checke of use state for the available inputs
  const handleCheck =(e)=>{
    setChecked((!checked))
  }

  // this on submit to handle whenever it render
  const handleSubmit=(e)=>{
e.preventDefault();
sendRequest().then(()=>navigate("/get"))
console.log(inputs,checked)
  }

  return (
    <form className="formcontrol" onSubmit={handleSubmit}>
      <Box className="boxcontroll" sx={{ bgcolor: "#f68544" }}>
        <FormLabel className="formlabel-control">BookName :</FormLabel>
        <TextField
          value={inputs.bookname}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="bookname"
        />
        <FormLabel className="formlabel-control">Author :</FormLabel>
        <TextField 
        value={inputs.author}
        onChange={handleChange}
        margin="normal" 
        fullWidth 
        variant="outlined" 
        name="author" />
        <FormLabel className="formlabel-control">Description :</FormLabel>
        <TextField
        value={inputs.description}
        onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel className="formlabel-control">Price :</FormLabel>

        <TextField
        value={inputs.price}
        onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel className="formlabel-control">Image Url :</FormLabel>
        <TextField
        value={inputs.image}
        onChange={handleChange}
          type="url"
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel
          control={<Checkbox checked={checked}  onChange={handleCheck}  />}
          label="Available"
        />

        <Box className="btn-addbook">
          <Button type="submit" variant="contained" className="btn-addbook2">
            AddBook
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default AddBooks;
