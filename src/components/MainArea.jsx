import {useState} from 'react'
import { useSelector } from 'react-redux'
import '../assets/styles/main-area.css'
import Info from './info'
import InvoiceCard from './InvoiceCard'
import InvoiceInfo from './InvoiceInfo'


function MainArea() {

  const invoices = useSelector((state) => state.invoices.allInvoice)

  console.log(invoices)

  const [filteredInvoices, setFilteredInvoices] = useState(invoices);

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
    <div className='main-area main-area-mobile main-area-tablet main-area-web'>
     <InvoiceInfo invoices={invoices} />

     {/* 
<Info invoices={invoices} handleFilterChange={handleFilterChange}/>
  */}

      <div className="main-area-content">
        {
          filteredInvoices.map((invoice, index) =>{
            return(
              <div key={index}>
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