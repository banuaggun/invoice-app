import {useState} from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, useLocation } from 'react-router-dom'
import '../assets/styles/main-area.css'
//import Info from './info'
import InvoiceCard from './InvoiceCard'
import InvoiceInfo from './InvoiceInfo'


function MainArea() {
  const location=useLocation()

  const invoices = useSelector((state) => state.invoices.allInvoice)

  //console.log(invoices)

  //const [filteredInvoices, setFilteredInvoices] = useState(invoices);

  /*
  const handleFilterChange = (selectedValue) => {
    if (selectedValue === 'all') {
      setFilteredInvoices(invoices);
    } else{
      const filtered = invoices.filter((invoice) => invoice.status === selectedValue);
      setFilteredInvoices(filtered);
    }
  };


  const handleFilterChange = (selectedValue) => {
    if (selectedValue === "all") {
      setFilteredInvoices(invoices);
    } else if (selectedValue === "paid") {
      setFilteredInvoices(allInvoices.filter(invoice => invoice.status === "paid"));
    } else if (selectedValue === "pending") {
      setFilteredInvoices(allInvoices.filter(invoice => invoice.status === "pending"));
    } else if (selectedValue === "draft") {
      setFilteredInvoices(allInvoices.filter(invoice => invoice.status === "draft"));
    }
  };
  
  */
  return (
    <div className='main-area main-area-mobile'>
      <div className="main-area-content">
        {invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </div>
      <Routes location={location} key={location.path}>
        <Route element={<div>Select an invoice to view details</div>} path='/' />
        <Route element={<InvoiceInfo/>} path='/invoice:invoiceId'/>
      </Routes>
    </div>
 
  )
}

export default MainArea