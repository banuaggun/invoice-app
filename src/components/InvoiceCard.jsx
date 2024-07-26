import React from 'react'
import PaidStatus from './PaidStatus'
import '../assets/styles/invoice-card.css'


function InvoiceCard({invoice}) {
  return (
    <div>
      <table className="mobile-card">
        <tr>
          <th rowSpan={2}>
            {invoice.id}
          </th>
          <td>
            {invoice.paymentDue} 
          </td>
          <td>
            {invoice.status}
          </td>
          <th rowSpan={2}>
            <i className="ph-bold ph-caret-right"></i>
          </th>
        </tr>
        <tr>
          <td>
            {invoice.clientName}
          </td>
          <td>
            {invoice.total}
          </td>
        </tr>
     
      </table>
     
    </div>
  )
}

export default InvoiceCard