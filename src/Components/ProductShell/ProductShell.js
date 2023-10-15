import React from 'react'
import './ProductShell.css'
import Data from '../Data/Data'
import clock from '../../Image/Live-clock.png'
import JavaBasic from "../../Image/javaBasic.png"

const ProductShell = () => {
  let AllData=[
    {
    img:clock,
    heading:"Abutaction ",
    pera:"this is only duw cration mnc zero .",
    stock:"32",
    price:"45.99",
    total:"20"
  },
  {
    img:JavaBasic,
    heading:"Sbutaction",
    pera:"macrancy is only digital cration m .",
    stock:"32",
    price:"55.99",
    total:"30"
  }
]
  return (
    <div className='product'>
      <div className='product-header'>
        <div className='product-header-left'>Product Sell</div>
        <div className='product-header-right'>
        <div className='product-searchBar'>
        <i class="bi bi-search"></i>
            <input placeholder='Search'></input>
        </div>
            <div className='div-right'>last 30 days</div>
        </div>
      </div>

      <div className='table-header'>
        <div className='left-header'>Product Name</div>
        <div className='right-header'>
          <div>Stock</div>
          <div>Price</div>
          <div>Total Sales</div>
        </div>
      </div>
      <hr/>

    <div className='datas'>
    {
             AllData.map((data) => (
              <Data img={data.img} heading={data.heading}  pera={data.pera} stock={data.stock} price={data.price} total={data.total}/>
            ))
          }
      
    </div>
    </div>
  )
}

export default ProductShell
