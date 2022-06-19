import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Link from "@mui/material/Link"
import CartItem from './Cart/CartItem';



const CartLayout = ({cart,onUpdateCartQuantity,onRemoveFromCart,onEmptyCart}) => {

    if (!cart.line_items) return (
      <div style={{display:"flex", justifyContent:"center"}}>
        <Typography mt={20} variant='h4'>
          Your cart is being loaded...
        </Typography>
      </div>
    );

    const onEmptyHandler=()=>onEmptyCart();

    const renderEmptyCart=()=>(
          <div style={{display:"flex", justifyContent:"center"}}>
                <Typography variant="h6" mt={5}>You have no items in your shopping cart, start adding some items to cart
                    <div style={{display:"flex", justifyContent:"center" ,margin:"5px"}}>
                    <Link component={Link} to="/" underline='none' color="success">Click here </Link>
                    </div>
                </Typography>
          </div>
    )

    const renderCart=()=>(
        <div style={{padding:"10px"}}>
        <Grid container spacing={3}>
          {cart.line_items.map((lineItem) => (
            <Grid item xs={12} sm={4} key={lineItem.id}>
              <CartItem 
                item={lineItem} 
                onUpdateCartQuantity={onUpdateCartQuantity} 
                onRemoveFromCart={onRemoveFromCart}
              />
            </Grid>
          ))}
        </Grid>
 
              <Stack direction="row" justifyContent="flex-start" alignItems="center" mt={3}>
                <Typography variant="h5">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
              </Stack>
              
              <Stack direction="row" spacing={3} justifyContent="flex-end">
                  <Button  size="large" type="button" variant="contained" color="error" onClick={onEmptyHandler}>
                    Empty cart
                  </Button>
                  <Button href="/checkout" size="large" type="button" variant="contained" color="success">
                    Checkout
                  </Button>
              </Stack>
      </div>
    )

    

  return (
        <Container>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Typography mt={3} align="center" variant="h4" gutterBottom>
                      Your Shopping Cart
                    </Typography>
                </div>
                { !cart.line_items.length ? renderEmptyCart() : renderCart() }
        </Container>
  )
}

export default CartLayout