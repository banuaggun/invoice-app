import React from 'react'
import PaidStatus from './PaidStatus'
import '../assets/styles/invoice-card.css'


function InvoiceCard({invoice}) {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <div className="card-content-id">
            <h2>{invoice.id}</h2>
          </div>
          <div className="card-content-due">
            <p>Due {invoice.paymentDue}</p>
          </div>
          <div className="card-content-client">
            <p>{invoice.clientName}</p>
          </div>
          <div className="card-content-total">
            <p>{invoice.total}€</p>
          </div>
          <div className="card-content-status">
            <PaidStatus type={invoice.status} />
          </div>
          <div className="card-content-arrow">
          <i className="ph-bold ph-caret-right"></i>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default InvoiceCard