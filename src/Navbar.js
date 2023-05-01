

function Navbar(props){
    let {changeFunc,itemsInCart,showCart} = props
    

    return(
        <div className="nav-container">
            <div>
                <div className="navbar-left-portion">
                    <h5>Shopping Cart</h5>
                    <h6>Home</h6>
                    <h6>About</h6>
                    <select onChange={(e)=>changeFunc(e)}>
                        <option value="All Products">All Products</option>
                        <option value="Adidas">Adidas</option>
                        <option value="Nike">Nike</option>
                        <option value="Puma">Puma</option>
                    </select>
                </div>
                <div>
                    <button onClick={(e)=>showCart(e)} className="cart-btn"><span class="material-symbols-outlined">shopping_cart</span>Cart<span>{itemsInCart}</span></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;