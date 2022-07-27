import React from 'react'

const ProductTr = ({el,handelname}) => {
  return (
    <tr>
        <td>
            <button onClick={()=>handelname(el.nom)}>btn</button>
        </td>
        <td>
            <img width="250px "src={el.img} alt="" />
        </td>
        <td>{el.nom}</td>
        <td>{el.prix}</td>
        <td>{el.qte}</td>
    </tr>
  )
}

export default ProductTr