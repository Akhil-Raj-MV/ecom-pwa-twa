import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Stack } from '@mui/material'

const CartItem = ({item,onUpdateCartQuantity,onRemoveFromCart}) => {

  const handleUpdateCart=(lineItemId,newQuantity)=>onUpdateCartQuantity(lineItemId,newQuantity);

  const handleRemoveFromCart=(lineItemId)=> onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item">
      <CardMedia image={item.image.url} alt={item.name} sx={{height:0 ,paddingTop: '56.25%'}}/>
      <CardContent >
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions >
        <div >
          <Stack direction="row">
            <Button type="button" size="small" onClick={()=>handleUpdateCart(item.id,item.quantity-1)}>
              -
            </Button>
            <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
            <Button type="button" size="small" onClick={()=>handleUpdateCart(item.id,item.quantity+1)}>
              +
            </Button>
          </Stack>
        </div>
        <Button variant="contained" type="button" color="info" onClick={()=>handleRemoveFromCart(item.id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  )
}

export default CartItem