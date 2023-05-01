import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import UserCart from './UserCart';


function App() {

  const data = [
    {
        id:1,
        brandName : "Adidas",
        productName : "Alphatorsion 360 Running Shoe",
        rating:4,
        price: "20,375",
        imageUrl:"https://m.media-amazon.com/images/I/711GgWWojWL._AC_UL600_FMwebp_QL65_.jpg",
        productUrl:"https://www.amazon.in/adidas-Alphatorsion-ShoesBlack-Grey-Grey8-5/dp/B083MKCTR7/ref=sr_1_30?pf_rd_i=22422513031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=a301b661-4d2f-4f79-b10d-dd4ac83821db&pf_rd_r=99F2CRCY5BHKX51DCQ63&pf_rd_s=merchandised-search-4&qid=1682870888&refinements=p_89%3Aadidas%2Cp_n_pct-off-with-tax%3A00-&s=apparel&sr=1-30"
    },
    {
        id:2,
        brandName : "Puma",
        productName : "Mens Trinity Lil Sneaker",
        rating:5,
        price: "7,199",
        imageUrl:"https://m.media-amazon.com/images/I/51-LYOEo4uL._AC_UL600_QL65_.jpg",
        productUrl:"https://www.amazon.in/Puma-Mens-Trinity-White-Black-Sneaker/dp/B0BRBGXG7J/ref=sr_1_27?keywords=shoes&m=A3L1OUG0B9LM6T&qid=1682871989&refinements=p_36%3A4516642031%2Cp_6%3AA3L1OUG0B9LM6T&rnid=1318474031&s=shoes&sr=1-27"
    },
    {
        id:3,
        brandName : "Puma",
        productName : "Unisex-Adult Rs-x Toys Sneaker",
        rating:5,
        price: "8,099",
        imageUrl:"https://m.media-amazon.com/images/I/71dc0FHe7vL._AC_UL600_QL65_.jpg",
        productUrl:"https://www.amazon.in/Puma-36944902-RS-X-Toys-White/dp/B07KCDWLW7/ref=sr_1_45?keywords=shoes&m=A3L1OUG0B9LM6T&qid=1682871989&refinements=p_36%3A4516642031%2Cp_6%3AA3L1OUG0B9LM6T&rnid=1318474031&s=shoes&sr=1-45"
    },
    {
        id:4,
        brandName : "Nike",
        productName : "Mens Jordan Stay Loyal 2 Running",
        rating:3,
        price: "10,290",
        imageUrl:"https://m.media-amazon.com/images/I/51cnNH3gMnL._AC_UL600_FMwebp_QL65_.jpg",
        productUrl:"https://www.amazon.in/Jordan-Loyal-2-Black-White-Gym-RED-DQ8401-061-11UK/dp/B0BWRCQCK1/ref=sr_1_12?keywords=shoes&qid=1682871741&refinements=p_36%3A4516642031&rnid=4516629031&s=shoes&sr=1-12"
    },
    {
        id:5,
        brandName : "Adidas",
        productName : "Mens Howzat Spike 20 Cricket Shoe",
        rating:5,
        price: "4,179",
        imageUrl:"https://m.media-amazon.com/images/I/713ffRBnKCL._AC_UL600_QL65_.jpg",
        productUrl:"https://www.amazon.in/Adidas-Howzat-Spike-Cricket-White/dp/B08TM7BTF8/ref=sr_1_72?pf_rd_i=22422513031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=a301b661-4d2f-4f79-b10d-dd4ac83821db&pf_rd_r=99F2CRCY5BHKX51DCQ63&pf_rd_s=merchandised-search-4&qid=1682871600&refinements=p_89%3Aadidas%2Cp_n_pct-off-with-tax%3A00-&rnid=1318502031&s=apparel&sr=1-72"
    },
    {
        id:6,
        brandName : "Nike",
        productName : "Mens M Air Max Alpha Trainer 5 Running Shoe",
        rating:4,
        price: "5,816",
        imageUrl:"https://m.media-amazon.com/images/I/418f9i2fuqL._AC_UL600_FMwebp_QL65_.jpg",
        productUrl:"https://www.amazon.in/Nike-Alpha-Trainer-5-SAIL-ROYAL-ANTHRACITE-DM0829-100-10UK/dp/B0BVG49BSN/ref=sr_1_27?keywords=shoes&qid=1682871741&refinements=p_36%3A4516642031&rnid=4516629031&s=shoes&sr=1-27"
    },
    {
        id:7,
        brandName : "Puma",
        productName : "Unisex-Adult Playmaker Pro Basketball Shoe",
        rating:4,
        price: "8,099",
        imageUrl:"https://m.media-amazon.com/images/I/71VyhnZRCxL._AC_UL600_QL65_.jpg",
        productUrl:"https://www.amazon.in/Puma-Unisex-Adult-Playmaker-White-Fiery-Basketball/dp/B09L5L7274/ref=sr_1_1?keywords=shoes&m=A3L1OUG0B9LM6T&qid=1682871989&refinements=p_36%3A4516642031%2Cp_6%3AA3L1OUG0B9LM6T&rnid=1318474031&s=shoes&sr=1-1"
    },
    {
        id:8,
        brandName : "Nike",
        productName : "Mens Joyride Run Flyknit Running Shoe",
        rating:3,
        price: "12,015",
        imageUrl:"https://m.media-amazon.com/images/I/51IBu2jhq4L._AC_UL600_FMwebp_QL65_.jpg",
        productUrl:"https://www.amazon.in/Nike-Joyride-Flyknit-AQ2730_White-Platinum/dp/B07WGKD56G/ref=sr_1_1?keywords=shoes&qid=1682871741&refinements=p_36%3A4516642031&rnid=4516629031&s=shoes&sr=1-1"
    }
]


let [currentProducts, setCurrentProducts] = useState("All Products")
let [itemsInCart, setItemsInCart] = useState(0)


let [cart, setCart] = useState([])


let filtered = data.filter(data => {
  if(currentProducts === "All Products"){
    return true
  } else if (currentProducts === "Adidas"){
    return data.brandName === "Adidas"
  } else if (currentProducts === "Puma"){
    return data.brandName === "Puma"
  } else if (currentProducts === "Nike"){
    return data.brandName === "Nike"
  } else{
    return false
  }
})

let products = filtered.map((product,index)=>{

  return(
      <div className="product-container" key={index}>
          <div className="img-container">
              <img src={product.imageUrl} alt={product.productName}/>
          </div>
          <div className="product-info">
              <h5>{product.brandName}</h5>
              <a href={product.productUrl} target="blank"><p>{product.productName}</p></a>
              <p>₹{product.price}</p>
              {/* <p>{rating}</p> */}
              <button id={product.id} onClick={(e)=>handleAddToCartBtn(e)}>Add to cart</button>
          </div>
      </div>
  )
})

let userCart = cart.map((product,index)=>{
  return(
    <div className='user-cart' key={index}>
      <div>
        <img src={product.imageUrl} alt={product.productName}/>
      </div>
      <div className='cart-details'>
        <p>{product.productName}</p>
        <p>₹{product.price}</p>
      </div>    
      <div>
        <button id={product.id} onClick={(e)=>handleRemoveItemFromCartBtn(e)}>Remove Item</button>
      </div>  
    </div>
  )
})

const handleChangeForFilterBtn = (e)=>{
  setCurrentProducts(e.target.value) 
}

const handleAddToCartBtn = (e)=>{
  e.target.setAttribute("disabled",true)
  e.target.textContent = "Added to cart"
  let product = e.target.id
  cart.push(data[product-1])
  setItemsInCart(cart.length)
  handleRemoveDisable(e.target)
}


const handleRemoveDisable = (button)=>{
  


  if(button.textContent === "Add to cart"){
    console.log("Add to cart Button Clicked");
  } else {
    console.log("Remove Button Clicked");
  }
}



const handleRemoveItemFromCartBtn = (e)=>{
  let product = e.target.id
  
  cart.forEach((item,index)=>{
    if(item.id === +product){
      cart.splice(index,1)
    } 
  })
  setItemsInCart(cart.length)
  handleRemoveDisable(e.target)
  if(cart.length === 0){
    setCartStyle({display:"none"})
  }
}


let [cartStyle, setCartStyle] = useState({display:"none"})

const displayUserCart = (e)=>{
  if(e.target.textContent === "Close"){
    setCartStyle({display:"none"})
  } else {
    setCartStyle({display:"block"})
  }
  if(cart.length === 0){
    setCartStyle({display:"none"})
  }
}

  return (
    <div className="App">
      <Navbar changeFunc={handleChangeForFilterBtn} itemsInCart = {itemsInCart} showCart={displayUserCart}/>
      <UserCart userCart={userCart} cartStyle= {cartStyle} hideCart={displayUserCart}/>
      <Header/>
      <Main data ={products}/>
      <Footer/>
    </div>
  );
}

export default App;
