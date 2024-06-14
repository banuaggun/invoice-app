import React from 'react'
import { useSelector } from 'react-redux'

function MainArea() {

  const invoices = useSelector((state) => state.invoices.allInvoice)

  console.log(invoices)
  return (
    <div className='main-area'>
      <div className="main-area-mobile-header">
        <div className='text'>
          <h2>Invoice</h2>
          <p>{invoices.length} invoices.</p>
        </div>
        <div className='buttons'>
          <div className='buttons-filter'>
            <button type='filter'>
              Filter <i class="ph-bold ph-caret-down"></i>
            </button>
          </div>
          <div className='buttons-new'>
            <button type='button'>
            <i class="ph-fill ph-plus-circle"></i> New
          </button>
          </div>
        </div>
   
      </div>
    </div>
  )
}

export default MainArea