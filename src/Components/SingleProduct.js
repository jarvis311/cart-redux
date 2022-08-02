import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../features/cardSlice'

import './singleproduct.css'
const SingleProduct = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [product, setProduct] = useState('')
    const cleanEffect = useRef(false)

    useEffect(() => {
        if(cleanEffect.current === false){
            const fetchProduct = async () => {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await res.json();
                console.log(data);
                setProduct(data)
            }
            fetchProduct()
        }
        return () => {
            cleanEffect.current = true
        }

    },[id])

    const handleAdd = (product) => {
        dispatch(add(product))
      }
    
    
    return (
        <main>
            <div className="card">
                <div className="card__body">
                    <div className="half">
                        <div className="featured_text">
                            <h1>{product.title}</h1>

                        </div>
                        <div className="image">
                            <img src={product.image} alt="" />
                        </div>
                    </div>
                    <div className="half half-1">
                        <div className="category">
                            <h3>Catagory</h3>
                            <div className="border"></div>
                            <p>{product.category}</p>
                        </div>
                        <div className="description">
                            <p>{product.description}</p>
                        </div>
                        <span className="stock"><i className="fa fa-pen"></i> In stock</span>
                        <div className="reviews">
                            <p> Price: {product.price}$</p>

                        </div>
                    </div>
                </div>
                <div className="card__footer">
        
                    <div className="action">
                        <button onClick={() => handleAdd(product)} type="button">Add to cart</button>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default SingleProduct