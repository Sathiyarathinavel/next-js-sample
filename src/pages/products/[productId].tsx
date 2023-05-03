import React from 'react'
import Router, { useRouter } from 'next/router'
import { log } from 'console';

const  ProductDetails= () => {
    const route = useRouter();
    // const productId=route.query.productId;
    const productId=route.query.productId1;
    console.log(route);   
  return (
    <div>
      <h1>This is the Details</h1>
      <h3>And The product Id was {productId}</h3>
    </div>
  )
}

export default ProductDetails
