import React, { useEffect, useState } from 'react'
import {commerce} from '../../lib/commerce'
import ProductLayout from '../ProductLayout';

const CategoryItem = ({pro,onAddToCart}) => {

    const [items,setItems]=useState([]);
    
    useEffect(()=>{
        async function fetchData(){
          const {data}=await commerce.products.list({category_slug: [`${pro}`]})
          setItems(data)
        }
        fetchData();
    },[pro])


  return (
    <ProductLayout products={items} onAddToCart={onAddToCart}/>
  )
}

export default CategoryItem
