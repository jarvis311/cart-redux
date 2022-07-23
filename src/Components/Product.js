import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../features/cardSlice'
import './product.css'
const Product = () => {
  const [product, setProduct] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json();
      setProduct(data)
    }
    fetchProduct()

  }, [])
  const handleAdd = (item) => {
    dispatch(add(item))
  }





  const renderProduct = product.map(item => (
    <div className="card" key={item.id}>
      <img src={item.image} alt="" />
      <h4>{item.title}</h4>
      <h5> Price {item.price}$</h5>
      <div className='btn-div'>
        <button onClick={() => handleAdd(item)} className="btn">
          Add to cart
        </button>
      </div>
    </div>

  ))

  return (
    <div className="productsWrapper">
      {renderProduct}
    </div>
  )
}

export default Product