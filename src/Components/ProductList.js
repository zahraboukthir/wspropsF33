import React from 'react'
import ProductCard from './ProductCard'
import ProductTr from './ProductTr'

const ProductList = ({products,handelname}) => {
    console.log(products)
  return (
    <div>
     {products.map(
        (produit,i)=><ProductCard key={i} product={produit}/>
     )}
    <table border="1">
    <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Product Name</th>
            
            <th>Price</th>
            <th>Qte</th>
          </tr>
          <tbody>
        {
        products.map(
            (el,i)=><ProductTr  handelname={handelname} key={i} el={el}/>
        )
     }</tbody>
    </table>
    </div>
  )
}

export default ProductList