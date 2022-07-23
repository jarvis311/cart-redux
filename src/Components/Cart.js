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
        <table className='tb'>
            <tr>
                <td><img className='cartimg' src={item.image} alt="" /></td>
            </tr>
            <tr>
                <td><div className='title'>{item.title}</div></td>

            </tr>
            <tr>
                <td><h5 className='price'>{item.price}$</h5></td>
            </tr>
           
            <tr>
                <td><button className="btnCart"onClick={() => handleRemove(item.id)}>Remove</button></td>

            </tr>
        </table>
    </div>
    ))
    return (
        <div className="cartContainer">
                {data}
            <hr />
            <div className= 'total' style={{ textAlign: 'right' }}>Total of cart: {sum} $</div>
        </div>
    )
}

export default Cart