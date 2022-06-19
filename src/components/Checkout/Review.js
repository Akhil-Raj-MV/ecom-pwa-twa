import React from 'react'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Review = ({cart}) => {


    if (!cart.line_items) return (
        <div style={{display:"flex", justifyContent:"center"}}>
          <Typography mt={20} variant='h4'>
            Please wait ,It may take few seconds
          </Typography>
        </div>
    )

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.line_items.map((lineItem) => (
          <ListItem key={lineItem.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={lineItem.name} secondary={lineItem.quantity}/>
            <Typography variant="body2">{lineItem.price.formatted_with_symbol}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {cart.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  )
}

export default Review