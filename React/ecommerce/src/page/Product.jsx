import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Product() {
    let [prodcut, setProdcut]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(data=>setProdcut(data))
    },[])
    
  return (
    <>
    <div className="container">
            {/* Month start */}
            <section id="month">
                <div className="container">
                    <div className="heading">Categories of The Month</div>
                    <div className="content">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className="container flex">
                        {prodcut.map((pro)=>
                        <Link to={`/productdetails/${pro.id}`} >
                            <div className="card">
                                <div className="image"><img src={pro.image} alt /></div>
                                <div className="title py-2">{pro.title}</div>
                                <div className="button">
                                    <div className="btn btn-primary"><a href>BUY</a></div>
                                </div>
                        </div>
                        </Link>
                        )}
                        
                    </div>
                </div>
            </section>
            {/* Month end */}


        </div>
    </>
  )
}

export default Product