import React from 'react'

import TransactionTablList from './TransactionTablList'
import s from './TransactionHistory.module.css'

export default function TransactionHistory({items}) {
    return (
        <table className={s.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item => (
        <TransactionTablList
            key={item.id}
            type={item.type}
            amount={item.amount }
            currency={item.currency}
        />
   ))}
  </tbody>
</table>
    )
}