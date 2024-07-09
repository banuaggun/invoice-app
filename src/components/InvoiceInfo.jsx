import React from 'react'

function InvoiceInfo({invoices}) {
  return (
    <div>
       <div className="main-area-mobile-header main-area-tablet-header">
        <div className='text'>
          <h2>Invoice</h2>
          <p>{invoices.length} invoices.</p>
        </div>
        <div className='buttons'>
          <div className='buttons-filter'>
            <button type='filter'>
              Filter <i className="ph-bold ph-caret-down"></i>
            </button>
          </div>
          <div className='buttons-new'>
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