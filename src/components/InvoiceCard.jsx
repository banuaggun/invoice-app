import React from 'react'
import '../main-area.css'


function InvoiceCard({invoice}) {
  return (
    <div>
      <div className="card-web">
        <div className="card-web-content">
          
          <div className="card-web-content-id">
            <h2># {invoice.id}</h2>
          </div>
          <div className="card-web-content-due">
            <p>Due {invoice.paymentDue}</p>
          </div>
          <div className="card-web-content-client">
            <p>{invoice.clientName}</p>
          </div>
          <div className="card-web-content-total">
            <p>€ {invoice.total}</p>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default InvoiceCard