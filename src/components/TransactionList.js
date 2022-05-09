import React, { useContext } from 'react'
import {GlobalContext} from '../contex/GlobalState'
import Transaction from './Transaction'
const TransactionList = () => {
  const {transactions,deleteTransaction} = useContext(GlobalContext)
  
  return (
    <>
        <h3>History</h3>
      <ul  className="list">
        {transactions.map(transaction=> (
          <Transaction key={transaction.id} deleteTransaction={deleteTransaction} transaction={transaction}/>
        ))}
        
      </ul>
    </>
  )
}

export default TransactionList
