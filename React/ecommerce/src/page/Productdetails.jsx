import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Productdetails() {
    let {pid} = useParams()
    let [product, setProduct]=useState([])

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${pid}`).then(res=>res.json()).then(data=>setProduct(data))
    },[])
  return (
   <>
   <div className="container">
    <h3> Product Details </h3>
    <div className="row">
        <div className="col-2"> <img src={product.image} alt="" width="75%"/> </div>
        <div className="col">
            <div><h3>Title: {product.title}</h3> </div>
            <div className='fs-5 text-secondary'> Description : {product.description} </div>
            <div className='fs-2 text-danger'> Total Price : {product.price} </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Productdetails