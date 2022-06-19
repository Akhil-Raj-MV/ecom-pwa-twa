import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



const Product = ({product,onAddToCart}) => {
    const imgURL=product.image.url;
    
  return (
    <div>
        <Card >
            <CardMedia title={product.name} image={imgURL} sx={{height:0 ,paddingTop: '56.25%'}}/>
            <CardContent>
                <div>
                <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    ${product.price.formatted}
                </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions disableSpacing>
                <IconButton 
                    aria-label="Add to Cart" 
                    onClick={()=>onAddToCart(product.id,1)} 
                    sx={{"&:hover, &.Mui-focusVisible":{ color: "green" }}}>
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    </div>
  )
}

export default Product