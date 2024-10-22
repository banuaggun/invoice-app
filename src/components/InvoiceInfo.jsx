import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import invoiceSlice from '../redux/invoiceSlice'
import '../assets/styles/invoice-info.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function InvoiceInfo() {
  const location = useLocation()
  const dispatch = useDispatch()
  //const invoiceId = location.search.substring(1)
  //const invoice = useSelector((state) => state.invoice.invoiceById)
  const invoiceId = new URLSearchParams(location.search).get('invoiceById')
  const invoice = useSelector((state) => state.invoice.invoiceById)

  useEffect(() => {
    dispatch(invoiceSlice.actions.getInvoiceById({id:invoiceId}))
  }, [invoice.id, dispatch])
  return (
    <div>
    {invoice && invoice.items && invoice.items.map((item) => (
      <div key={item.id}>
        <div>
          <p>Item name:</p>
          <h1>{item.clientName}</h1>
        </div>
      </div>
    ))}
    <div className="invoice-info">
      <div className='invoice-info-text'>
        <h2>Invoice</h2>
        <p>{invoice ? invoice.items.length : 0} items.</p>
      </div>
      <div className='invoice-info-buttons'>
        <div className='invoice-info-buttons-filter'>
          <button type='filter'>
            Filter <i className="ph-bold ph-caret-down"></i>
          </button>
        </div>
        <div className='invoice-info-buttons-new'>
          <button type='button'>
            <i className="ph-fill ph-plus-circle"></i> <span className='button-text-1'>New</span> <span className='button-text-2'>Invoice</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InvoiceInfo