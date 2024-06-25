import React from 'react'

function InvoiceCard({invoice}) {
  return (
    <div>
      <div className="card-web">
        <div className="card-web-content">
          <h2># {invoice.id}</h2>
          <p>Due {invoice.paymentDue}</p>
          <p>{invoice.clientName}</p>
          <p>€ {invoice.total}</p>
        </div>
      </div>
    </div>
  )
}

export default InvoiceCard