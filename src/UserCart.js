

function UserCart(props){
let {userCart,cartStyle,hideCart, cart} = props

let total = 0


cart.forEach(prod =>{
    total += parseFloat(prod.price.replace(/,/g,''))
  })
  

return(
    <div className="cart-menu" style={cartStyle}>
        {userCart}
        <div className="check-out">
            <h5>Total : ₹{total} </h5>
            <button>Checkout</button>
        </div>
        <div>
            <button className="cart-close-btn" onClick={(e)=>hideCart(e)}>Close</button>
        </div>
    </div>
    
)
}


export default UserCart;