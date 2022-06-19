import React from 'react'
import Grid from '@mui/material/Grid';
import Product from './Product';



const Products=({products,onAddToCart})=>{
    return(
        <div>
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                                <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                 ))}
                </Grid>    
        </div>
    )
}

export default Products