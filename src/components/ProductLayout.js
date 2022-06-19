import React, {useState } from 'react';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import Products from "./Products/Products";
import SearchedLayout from './SearchedLayout';


const ProductLayout = ({products,onAddToCart}) => {

  const [sort,setSort]=useState("");
  const [searchInput,setSearchInput]=useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
    if(event.target.value==="plh"){
      products.sort((a,b)=>{
        if(a.price.raw===b.price.raw){
          return a.name-b.name
        }
        return a.price.raw-b.price.raw
      })
    }
    if(event.target.value==="phl"){
      products.sort((a,b)=>{
        if(a.price.raw===b.price.raw){
          return a.name-b.name
        }
        return b.price.raw-a.price.raw
      })
    }
    if(event.target.value==="none"){
      products.sort((a,b)=>{
        return a.created-b.created;
      })
    }
    
  
  };

  if(!products.length){
    return(
      <div style={{display:"flex", justifyContent:"center"}}>
          <Typography mt={20} variant='h4'>
          Loading the products...
          </Typography>
      </div>
  )
  }
  const onChangeInputHandler=(e)=>{
      setSearchInput(e.target.value);
  }

 


  return (
       <>
        <Stack  direction={{ xs: 'column', sm: 'row' }}  spacing={{ xs: 1, sm: 2, md: 4 }}>
            <FormControl sx={{marginTop:"10px",padding:"20px"}}>
                <Typography variant='h6'>Sort By</Typography>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={sort}
                  onChange={handleChange}
                >
                  <FormControlLabel value="none" control={<Radio color="success"/>} label="None" />
                  <FormControlLabel value="plh" control={<Radio color="success"/>} label="price low to high" />
                  <FormControlLabel value="phl" control={<Radio color="success"/>} label="price high to low" />
                </RadioGroup>
            </FormControl>
            <div style={{maringTop:"30px" ,padding:"40px"}}>
        
               <TextField 
                  sx={{width:300}}
                  size="small"
                  label={<SearchIcon/>}
                  value={searchInput}
                  onChange={onChangeInputHandler}
                />
            
            </div>
          </Stack>


         <div style={{margin:"30px"}}>
            {!searchInput.length &&
            <Products products={products} onAddToCart={onAddToCart}/>}
            {searchInput.length &&
             <SearchedLayout query={searchInput} onAddToCart={onAddToCart}/>}
        </div>

      </>
  )
}

export default ProductLayout