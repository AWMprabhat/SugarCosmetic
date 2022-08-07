import React, { useState, useEffect } from "react";
import "./cart.css";

const Cart = ({ cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0);
  let dis = 40;
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
   
<>



  
  { cart.length>0 ?
  
  <article>
  <div className="left">
  {cart.map((item) => (
     <div className="cart_box" key={item.id}>
       <div className="cart_img">
         <img src={item.img} alt="" />
         <p>{item.title}</p>
       </div>
       <div>
         <button onClick={() => handleChange(item, -1)}>-</button>
         <button>{item.amount}</button>
         <button onClick={() => handleChange(item, 1)}>+</button>
       </div>
       <div>
         <span>{`${item.amount}x${item.price}=${item.price*item.amount}` }</span>
         <button onClick={() => handleRemove(item.id)}>Remove</button>
       </div>
     </div>
   ))}
  </div>
    <div className="right">
         
           <h3>Offers and price details</h3>
            <h2>BY2G1</h2>
            <h4>price details</h4>
            <div className="price-div">
             <p>Cart Sub Total: Rs {price}</p>
             <p>Shipping Cost: Rs 0</p>
             <p>Discount Applied: Rs 0</p>
             <p>Ammount Payable: Rs {price}</p>
            </div>
            <div className="btn-group">
            <button> <a href="#">Continue Shopping</a></button>
            <button>Delivery Information</button>
            </div>   
    </div>
 </article> : <div className="no-data">
  <h1 >No Item in Cart</h1>
 </div>
  }

  
</>
    
  );
 
};

export default Cart;