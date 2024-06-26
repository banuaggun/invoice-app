import React from 'react'
import '../main-area.css'
import PaidStatus from './PaidStatus'


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
          <div className="card-web-content-status">
            <PaidStatus type={invoice.status} />
          </div>
          <div className="card-web-content-arrow">
          <i className="ph-bold ph-caret-right"></i>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default InvoiceCard