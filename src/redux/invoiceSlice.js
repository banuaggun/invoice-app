import { createSlice } from "@reduxjs/toolkit";
import data from '../assets/data/data.json'


const invoiceSlice = createSlice({
  name: 'invoice',
  initialState:{
    allInvoice: data, 
    invoiceById: null
  },
  reducers:{
    getInvoiceById: (state, action) => {
      const { allInvoice } = state;
      const invoice = allInvoice.find((item) => item.id === action.payload.id);
      state.invoiceById = invoice;
    },
    //invoices reducer here
  }
})

export default invoiceSlice