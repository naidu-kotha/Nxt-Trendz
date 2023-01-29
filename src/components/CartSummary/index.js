import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const itemsInCart = cartList.length
      let totalPrice = 0
      cartList.forEach(eachItem => {
        totalPrice += eachItem.quantity * eachItem.price
      })

      return (
        <div className="summary-container">
          <h1 className="order-heading">
            Order Total: <span className="cart-total">Rs {totalPrice}/-</span>
          </h1>
          <p className="cart-items-count">{itemsInCart} items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
