import React from 'react'
import { useSelector } from 'react-redux'
import '../assets/styles/main-area.css'
import InvoiceCard from './InvoiceCard'
import InvoiceInfo from './InvoiceInfo'


function MainArea() {

  const invoices = useSelector((state) => state.invoices.allInvoice)

  console.log(invoices)
  return (
    <div className='main-area main-area-mobile main-area-tablet main-area-web'>
     <InvoiceInfo invoices={invoices} />

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