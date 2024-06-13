import React from 'react'
import { useSelector } from 'react-redux'

function MainArea() {

  const invoices = useSelector((state) => state.invoices.allInvoice)

  console.log(invoices)
  return (
    <div>
      <div className="main-area-header">
        <div>
          <h2>Invoice</h2>
          <p>There are {invoices.length} total invoices.</p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default MainArea