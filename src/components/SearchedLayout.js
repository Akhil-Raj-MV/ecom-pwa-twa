import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Products from './Products/Products'
import {commerce} from '../lib/commerce'


const SearchedLayout = ({query,onAddToCart}) => {

    const [newProducts,setNewProducts]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    useEffect(()=>{
        setIsLoading(true);
        const fetchNewProducts=async()=>{
            const {data}= await commerce.products.list({
                query: `${query}`,
              })
            setNewProducts(data);
            setIsLoading(false)
        }
        fetchNewProducts();
    },[query])

    if(!isLoading && (!newProducts || !newProducts.length) ){
        return(
            <div style={{display:"flex", justifyContent:"center"}}>
                <Typography mt={20} variant='h4'>
                No such products found.....
                Try Searching something different
                </Typography>
            </div>
        )
    }

    if( isLoading &&(!newProducts || !newProducts.length)){
        return(
          <div style={{display:"flex", justifyContent:"center"}}>
              <Typography mt={20} variant='h4'>
              Loading the products...
              </Typography>
          </div>
      )
      }
    

  return (
    <div style={{margin:"30px"}}>
        <Products products={newProducts} onAddToCart={onAddToCart}/>
    </div>
  )
}

export default SearchedLayout