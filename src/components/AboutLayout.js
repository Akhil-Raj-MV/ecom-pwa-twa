import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Ecom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const AbouLayout = () => {
  
  return (
    <div>
      <Container maxWidth="md">
        <div style={{display:"flex", justifyContent:"center"}}>
          <Typography mt={5} variant='h6'>About us</Typography>
        </div>
        
          <div style={{display:"flex", justifyContent:"center"}}>
              <Box sx={{width: 500, height: 200}}>
              <Typography mt={2} variant='h4' padding={0} align="center" > 
                We are on a mission to make 
                Quality products more accessible
              </Typography>
              </Box>
          </div>
          <div style={{display:"flex", justifyContent:"center"}}>
          <Card sx={{width:400 ,display:"flex", justifyContent:"center", backgroundColor:"greenyellow"}}>
            <CardContent>
                <Typography variant='h6'>Contact us</Typography>
                <Typography variant='h6'>
                  Email : ecomAdmin@gmail.com
                </Typography>
                <Typography variant='h6'>
                  Phone : 0123456789
                </Typography>
            </CardContent>
          </Card>
          </div>
          <div style={{display:"flex", justifyContent:"center"}}>
          <Card sx={{width:400 ,display:"flex", justifyContent:"center"}}>
            <CardContent>
                <Typography variant='h6'>Follow us on</Typography>
                <IconButton>
                  <YouTubeIcon fontSize='large' color="error"/>
                </IconButton>
                <IconButton>
                  <FacebookIcon fontSize='large' color="primary"/>
                </IconButton>
                <IconButton>
                  <TwitterIcon fontSize='large' color="info"/>
                </IconButton>
                <IconButton>
                  <InstagramIcon fontSize='large' color="secondary"/>
                </IconButton>
            </CardContent>
          </Card>
          </div>
      </Container>       
        <Copyright sx={{ mt: 5 }} />

    </div>
  )
}

export default AbouLayout