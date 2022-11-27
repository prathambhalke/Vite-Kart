import React from 'react'
import "./Product.css"
import { NavLink } from 'react-router-dom'
const Product = (Category_Item) => {

  const { id, name, image, category, price } = Category_Item;
  console.log(name)
  return (

    <NavLink className="main" to={`/SingleProduct/:${id}`}>
      
      <div className="card">
        <figure>
          <img className='Featured-Img' src={image} alt={name} />
          <figcaption className='caption'>{category}</figcaption>
        </figure>

        <div className="card-data">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>

      </div>
    </NavLink>

  )
}

export default Product
