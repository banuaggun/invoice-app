import React from 'react'
import { useSelector } from 'react-redux'
import InvoiceCard from './InvoiceCard'

function MainArea() {

  const invoices = useSelector((state) => state.invoices.allInvoice)

  console.log(invoices)
  return (
    <div className='main-area-mobile main-area-tablet main-area-web'>
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

      <div className="main-area-content">
        {
          invoices.map((invoice, index) =>{
            return(
              <div>
                <InvoiceCard invoice={invoice} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MainArea