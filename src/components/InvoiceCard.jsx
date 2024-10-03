import React from 'react'
import PaidStatus from './PaidStatus'
import '../assets/styles/invoice-card.css'


function InvoiceCard({invoice}) {
  return (
    <div>
      <div className="mobile-invoice-card">
        <div className="row-1">
          {invoice.id}
        </div>
        <div className="row-2">
          <span>{invoice.paymentDue}</span>
          <span>{invoice.status}</span>
        </div>
        <div className="row-3">
          <span>{invoice.clientName}</span>
          <span>{invoice.total} $</span>
        </div>

        <div className="right-button">
        <i className="ph-bold ph-caret-circle-right"></i>
        </div>
      </div>
    {/*
          <table className="mobile-card">
        <tr className="mobile-card-row">
          <tr>
            <th rowSpan={2} className="mobile-card-id">
              {invoice.id}
            </th>
            <td>
              {invoice.paymentDue} 
            </td>
            <td className='column-3'>
              {invoice.status}
            </td>
            <th rowSpan={2} className="mobile-card-arrow">
              <i className="ph-bold ph-caret-right"></i>
            </th>
          </tr>
          <tr>
            <td>
              {invoice.clientName}
            </td>
            <td className='column-3'>
              {invoice.total}
            </td>
          </tr>
        </tr>
       
     
      </table>
  */}
    </div>
  )
}

export default InvoiceCard