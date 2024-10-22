import React from 'react'
import PaidStatus from './PaidStatus'
import '../assets/styles/invoice-card.css'
import { Link } from 'react-router-dom'


function InvoiceCard({invoice}) {

  return (
    <Link to={`/invoice/${invoice.id}`}>
    <div>
      <div className="mobile-invoice-card">
        <div className="row-1">
          {invoice.id}
          <div className="right-button">
        <i className="ph-bold ph-caret-circle-right"></i>
        </div>
        </div>
        <div className="row-2">
          <span>{invoice.paymentDue}</span>
          <span>
          <PaidStatus type={invoice.status} />
          </span>
        </div>
        <div className="row-3">
          <span>{invoice.clientName}</span>
          <span>{invoice.total} $</span>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default InvoiceCard