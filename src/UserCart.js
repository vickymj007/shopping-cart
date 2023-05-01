function UserCart(props){
let {userCart,cartStyle,hideCart} = props

return(
    <div className="cart-menu" style={cartStyle}>
        {userCart}
        <div>
            <button className="cart-close-btn" onClick={(e)=>hideCart(e)}>Close</button>
        </div>
    </div>
    
)
}


export default UserCart;