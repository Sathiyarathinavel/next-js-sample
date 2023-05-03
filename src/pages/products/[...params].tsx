import { useRouter } from 'next/router';
import React from 'react'

const ProductDocs= () => {
  const route = useRouter();
    const productId=route.query.params;
    // const { productId }=route
    console.log(productId);  
  return (
    <div>
      <h1>This is the Catch all routes</h1>
    </div>
  )
}

export default ProductDocs
