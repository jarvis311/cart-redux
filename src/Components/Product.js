import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './product.css'
const Product = () => {
  const [product, setProduct] = useState([])
  const cleanEffect = useRef(false)

  useEffect(() => {
    if (cleanEffect.current === false) {

      const fetchProduct = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json();
        setProduct(data)
      }
      fetchProduct()
      return () => {
        cleanEffect.current = true;
      }
    }

  }, [])



  const renderProduct = product.map(item => (

    <Link key={item.id} to={`/infoproduct/${item.id}`}>
      <div className="card" >
        <img src={item.image} alt="" />
        <h4>{item.title}</h4>
        <h5> Price {item.price}$</h5>
      </div>

    </Link>
  ))

  return (
    <div >
      {renderProduct}
    </div>
  )
}

export default Product