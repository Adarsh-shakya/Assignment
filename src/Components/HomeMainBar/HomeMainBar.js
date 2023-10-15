import React from 'react'
import './HomeMainBar.css'
import Card from '../Card/Card'
import Overview from '../Overview/Overview'
import Customer from '../Customers/Customer'
import ProductShell from '../ProductShell/ProductShell'


const HomeMainBar = () => {
  return (
    <div >

      <div className='Header'>
        <p>Hello Adarsh</p>
        <div className='searchBar'>
        <i class="bi bi-search"></i>
            <input placeholder='Search'></input>
        </div>
      </div>

     <div className='Cards'>
        <Card heading="Earning" price="198" rate="37.8" icon="bi bi-currency-dollar" backgroundColor='rgb(185, 240, 185)'/>
        <Card heading="Orders" price="2.4" rate="3" icon="bi bi-receipt-cutoff"  backgroundColor='rgba(138, 91, 138, 0.473)'/>
        <Card heading="Balance" price="2.4" rate="2" icon="bi bi-database-fill-up" backgroundColor='rgba(129, 186, 209, 0.589)'/>
        <Card heading="Total" price="98" rate="11" icon="bi bi-person-lock" backgroundColor='rgba(228, 191, 123, 0.486)'/>
     </div >

     <div className='sections'>
     <Overview/>
     <Customer/>
     </div>

     <div>
      <ProductShell/>
     </div>
     
    </div>
  )
}

export default HomeMainBar
