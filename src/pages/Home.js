import React ,{ useState, useEffect } from 'react'
import {Route,Switch} from 'react-router-dom'
import AboutLayout from '../components/AboutLayout'
import CartLayout from '../components/CartLayout'
import CatergoryLayout from '../components/CatergoryLayout'
import CheckoutLayout from '../components/CheckoutLayout'
import TopNav from '../components/Navbar/TopNav'
import ProductLayout from '../components/ProductLayout'
import {commerce} from '../lib/commerce'


const Home = () => {
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState({});
  const [categories,setCategories]=useState({});

  const fetchProducts= async()=>{
      const {data}= await commerce.products.list();
      setProducts(data);
  }
  const fetchCart = async () => {
    const res= await commerce.cart.retrieve();
    setCart(res);
  };

  const addToCartHandler=async(productId,quantity)=>{
      const itemToBeAdded= await commerce.cart.add(productId,quantity);
      setCart(itemToBeAdded.cart)
  }

  const updateCartHandler=async (lineItemId,quantity)=>{
    const response = await commerce.cart.update(lineItemId, { quantity });
    setCart(response.cart);
  }

  const removeFromCartHandler=async(lineItemId)=>{
      const response=await commerce.cart.remove(lineItemId);
      setCart(response.cart)
  }

  const emptyCartHandler=async()=>{
    const response= await commerce.cart.empty();
    setCart(response.cart);
  }

  const refreshCartHandler=async()=>{
      const response=await commerce.cart.refresh();
      setCart(response.cart);
  }

  const fetchCategories=async()=>{
    const response=await commerce.categories.list();
    setCategories(response);
  }
  

  useEffect(()=>{
    fetchProducts();
    fetchCart();
    fetchCategories();
  },[])

  return (
    <div>
      <TopNav cartItemNo={cart.total_items}/>
      <Switch>
            <Route exact path="/">
                <ProductLayout 
                      products={products} 
                      onAddToCart={addToCartHandler}
                />
            </Route>
            <Route exact path="/home">
                <ProductLayout 
                      products={products} 
                      onAddToCart={addToCartHandler}
                />
            </Route>
            <Route exact path="/cart">
                <CartLayout 
                    cart={cart} o
                    onRemoveFromCart={removeFromCartHandler} 
                    onEmptyCart={emptyCartHandler} 
                    onRefreshCart={refreshCartHandler}
                    onUpdateCartQuantity={updateCartHandler}
                />
            </Route>
            <Route exact path='/checkout'>
                  <CheckoutLayout cart={cart}/>
            </Route>
            <Route exact path='/about'>
                  <AboutLayout/>
            </Route>
            <Route exact path='/category'>
                  <CatergoryLayout categories={categories.data} onAddToCart={addToCartHandler} />
            </Route>
      </Switch>
    </div>
  )
}

export default Home