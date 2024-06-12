import { createSlice } from "@reduxjs/toolkit";
import data from '../assets/data/data.json'


const invoiceSlice = createSlice({
  name: 'invoice',
  initialState:{
    allInvoice: data, 
  },
  reducers:{
    //invoices reducer here
  }
})

export default invoiceSlice