import React from 'react'
import "./Featured.css"
import { useProductContext } from '../Context/Context'
import Product from '../Product/Product'
const FeaturedProducts = () => {

  const { isLoading, featuredProducts } = useProductContext()

  if (isLoading) {
    return <div>Loading.....</div>
  }

  return (

    <div className='Featured_Container_main'>
      <div className="head">

        <p className="intro-data">Check Now!</p>
        <p className="common-heading">Our Feature Services</p>

      </div>
      
      <div className="services-Data">
        <div className="featured-container">

          {
            featuredProducts.map((Category_Item) => {
              // console.log(Category_Item)
              return <Product key={Category_Item.id} {...Category_Item} />
            })
          }
        </div>
      </div>
    </div>

  )
}

export default FeaturedProducts
