import { useState } from 'react'
import './App.css'
import { use } from 'react'

function App() {
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('Income')
  const [transactions, setTransactions] = useState([])

  function handleClick() {
    setTransactions([...transactions, { amount, type }])
    setAmount('')
    setType('Income')
  }
  const totalIncome = transactions.reduce((acc, transactions) => {
    return transactions.type == 'Income' ? Number(transactions.amount) + acc : acc
  }, 0)
  const totalExpense = transactions.reduce((acc, transactions) => {
    return transactions.type == 'Expense' ? Number(transactions.amount) + acc : acc
  }, 0)
  const totalBalance = totalIncome - totalExpense
  
  return (
    <>
    <div>
      <h1>
        "Expense Management System"
      </h1>
      <hr />
      <div>
        <div>
          <h3>Total Income: {totalIncome}</h3>
          <h3>Total Expense: {totalExpense}</h3>
          <h3>Total Balance: {totalBalance}</h3>
        </div>
        <hr />
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <input onChange={(e) => setAmount(e.target.value)} type="text" placeholder='Enter Amount' name="" id="" />
            <select onChange={(e) => setType(e.target.value)} name="" id="">
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>

        <div>
          {
            transactions.map((value, index) => {
              return <div style={{marginTop:'12px'}}>
               <div style={{border:'2px solid white' , borderColor:'white', margin:'12px', padding:'10px'} }>
                 <div style={{display:'flex'}}>
                  {value.amount} {value.type}
                 </div>
               </div>
              </div>
            })
          }
        </div>
      </div>

    </div>
  </>
)
} 

export default App
