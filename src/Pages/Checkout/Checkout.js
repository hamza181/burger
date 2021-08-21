import React from 'react'
import OrderSummary from '../../Components/OrderSummary/OrderSummary'
import Navbar from '../../Layouts/Navbar/Navbar'
// import burger from '../Home/Home'

function Checkout() {
    return (
        <div>
            <Navbar></Navbar>
            {/* {burger} */}
            <OrderSummary></OrderSummary>
        </div>
    )
}

export default Checkout
