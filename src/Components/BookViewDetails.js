import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios';
import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';


function BookViewDetails() {

    const navigate =useNavigate();

const [inputs, setInputs] = useState({})
const [checked,setChecked] =useState(false)


    const _id =useParams()._id;
useEffect(()=>{

const fetchHandler =async()=>{
    await axios.get(`http://localhost:8000/books/${_id}`)
    .then((res)=>res.data).then((data)=>setInputs(data.book))
.catch((err)=>console.log(err))

};
fetchHandler()


// here we gives _id as aparameter because when ever that _id trigggers to change the useeffect render
},[_id]);


const sendRequest =async()=>{
    await axios.put(`http://localhost:8000/books/edit/${_id}`,{
  bookname:String(inputs.bookname),
  author:String(inputs.author),
  description:String(inputs.description),
  price:String(inputs.price),
  image:String(inputs.image),
  available:Boolean(checked)
  })
  .then((res)=>res.data);
  }





const handleSubmit=(e)=>{
    e.preventDefault();
    sendRequest().then(()=>navigate("/get"))
    console.log(inputs,checked)
      }

      const handleChange = (e) => {
        setInputs((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value
          
        }));
        
      };
    
  

  const handleCheck =(e)=>{
    setChecked((!checked))
  }




  return (
    <div>
    {inputs && (
    
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
        <Button type='submit'  variant="contained" className="btn-addbook2">
          Update Book
        </Button>
      </Box>
    </Box>
  </form>
  )}
  </div>
  )
}

export default BookViewDetails