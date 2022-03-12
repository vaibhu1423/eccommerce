import React from 'react'
import {Alert, Autocomplete, Button, TextField, Typography} from '@mui/material';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
export default function  () {
    const options = ['AAA', 'BBB','ccc'];
     
  return (
    <div>
        <Typography variant="h1" mt={5} component="h2">
  h1. Heading
</Typography>
<Alert severity="error">This is an error alert — check it out!</Alert>
<Alert severity="warning">This is a warning alert — check it out!</Alert>
<Alert severity="info">This is an info alert — check it out!</Alert>
<Alert severity="success">This is a success alert — check it out!</Alert>
<Autocomplete
  disablePortal
  id="combo-box-demo"
  options={options}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Movie" />}
/>
<Button mt={4} variant="text">Text</Button>
<Button mt={4} variant="contained">Contained</Button>
<Button mt={4} variant="outlined">Outlined</Button>
<Button variant="outlined" endIcon={<DeleteIcon />} >
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>

  Send
</Button>
<Navbar/>
<div className="container">
   <div className="row">
       <div className="col-lg-4 col-md-6 col-sm-10 col-12">
      <div className="card-0 m-3 px-3">
      <ProductCard/> 
        </div>
         </div>
       <div className="col-lg-4 col-md-6 col-sm-10 col-12">
      <div className="card-0 m-3 px-3">
      <ProductCard/> 
        </div>
         </div>
       <div className="col-lg-4 col-md-6 col-sm-10 col-12">
      <div className="card-0 m-3 px-3">
      <ProductCard/> 
        </div>
         </div>
     </div>
  </div>
    </div>
  )
}
