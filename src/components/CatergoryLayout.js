import React,{useState} from 'react'
import Grid from '@mui/material/Grid'
import Typography  from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import  Button  from '@mui/material/Button';
import CategoryItem from './Category/CategoryItem';


const CatergoryLayout = ({categories,onAddToCart}) => {
    const [pro,setPro]=useState();

    if(!categories){
        return(
            <div style={{display:"flex", justifyContent:"center"}}>
                <Typography mt={20} variant='h4'>
                Please wait...
                </Typography>
            </div>
        )
    }

  return (
    <div>
            {pro && 
                    <CategoryItem pro={pro} onAddToCart={onAddToCart}/>
            }
            {!pro && 
                <Grid container justify="center" spacing={4}>
                {categories.map((category) => (
                    <Grid key={category.id} item xs={12} sm={6} md={4} lg={3}>
                            <div style={{margin:"30px"}}>
                                <Card>
                                    <CardMedia 
                                        title={category.name} 
                                        image={category.assets[0].url} 
                                        sx={{height:30 ,paddingTop: '80%'}}/>
                                    <CardContent>
                                    <div>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {category.name}
                                        </Typography>
                                    </div>
                                    <Button variant="outlined" onClick={()=>setPro(category.slug)} >
                                            Explore now
                                    </Button>
                                    </CardContent>
                                </Card>
                            </div>
                    </Grid>
                ))}
            </Grid>    
            
            }
    </div>
  )
}

export default CatergoryLayout