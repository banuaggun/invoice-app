import React from 'react'

function PaidStatus({type}) {

  const classNames = {
    paid:['paid'],
    pending:['pending'],
    draft:['draft']
  }

  return (
    <div className={`${type === 'paid' ? classNames.paid[0] : type === 'pending' ? classNames.pending[0] : classNames.draft[0]}`}>

      <div className={`status ${type === 'paid' ? classNames.paid[1] : type === 'pending' ? classNames.pending[1] : classNames.draft[1]}`} />
      <p>{type}</p>
    </div>
  )
}

export default PaidStatus