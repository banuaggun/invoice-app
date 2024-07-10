import React from 'react'

import '../assets/styles/invoice-info.css'

function InvoiceInfo({invoices}) {
  return (
    <div>
       <div className="invoice-info">
        <div className='invoice-info-text'>
          <h2>Invoice</h2>
          <p>{invoices.length} invoices.</p>
        </div>
        <div className='invoice-info-buttons'>
          <div className='invoice-info-buttons-filter'>
            <button type='filter'>
              Filter <i className="ph-bold ph-caret-down"></i>
            </button>
          </div>
          <div className='invoice-info-buttons-new'>
            <button type='button'>
            <i className="ph-fill ph-plus-circle"></i> <span className='button-text-1'>New</span>  <span className='button-text-2'>Invoice</span>
          </button>
          </div>
        </div>
   
      </div>
    </div>
  )
}

export default InvoiceInfo