import React, { useState } from 'react';

function Info({ invoices, handleFilterChange, filter }) {


  return (
    <div className="invoice-info">
      <h2>Invoice</h2>
      <p>{invoices.length} invoices.</p>

      {/* Filter Dropdown */}
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
        <option value="draft">Draft</option>
      </select>

      {/* Display Filtered Invoices */}
     
    </div>
  );
}

export default Info;
