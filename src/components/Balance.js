import React, { useContext } from 'react'
import {GlobalContext} from '../contex/GlobalState'
const Balance = () => {
  const {transactions} =useContext(GlobalContext)
  let k = transactions.map(t=>t.amount).reduce((m,l)=>m+l).toFixed(2)
  return (
    <>
        <h4>Your Balance</h4>
      <h1 >${k}</h1>
    </>
  )
}

export default Balance
