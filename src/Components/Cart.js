import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../features/cardSlice';
import './cart.css'
const Cart = () => {

    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart);

    const handleRemove = (id) => {
        dispatch(remove(id))
    }
    const key = 'id';

    const arrayUniqueByKey = [...new Map(cartItem.map(item =>
        [item[key], item])).values()];
    console.log(arrayUniqueByKey);


    const p = arrayUniqueByKey.map(t => {
        return t.price
    })

    let sum = 0;
    for (let i = 0; i < p.length; i++) {
        sum += p[i];
    }

    const data = arrayUniqueByKey.map(item => (
        <div key={item.id} className="cartCard">
            <div className="cart_img">
                <img src={item.image} alt="" />
            </div>
            <div className="product_info">
                <h4>{item.title}</h4>
                <h5> $ {item.price}</h5>
                <button className='remove_btn' onClick={() => handleRemove(item.id)}>Remove</button>

            </div>
        </div>
    ))
    const renderTotalProduct = arrayUniqueByKey.map(total => (
        <React.Fragment>
            <div key={total.id} className="total_product_info">
                <div className="total_info">
                    <h5>{total.title}</h5>
                </div>
                <div className="price_total">
                    <p>${total.price}</p>
                </div>


            </div>

        </React.Fragment>
    ))

    if(arrayUniqueByKey.length === 0){
        return (
            <div className='empty_cart'>
                <h1 >Your cart is empty</h1>
                <img src="https://alphapharmaexhibitions.com/images/cartempty1.png" alt="" />
            </div>
        )
    }
    return (
        <div className="cartContainer">
            <div className="card-body">
                {data}
            </div>
            <div className='total'>
                {renderTotalProduct}
                <div className="total_sum">
                    <div className="sum">
                        <h4>Total</h4>
                        <h4>$ {sum}</h4>
                    </div>
                </div>
                <div className="pay">
                    <button>Proccesed to pay</button>
                </div>
            </div>

        </div>
    )
}

export default Cart