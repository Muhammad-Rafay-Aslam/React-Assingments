import { useState } from 'react'
import './App.css'

function App() {
  const [addItems, setAddItems] = useState('')
  const [itemsArr, setItemsArr] = useState([])
  function addBtn(){
    setAddItems('')
    setItemsArr([...itemsArr, {addItems}])
  }


  return (
    <>
      <div>
        <h1>TODO APPLICATION</h1>
      </div>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <input value={addItems} onChange={(e) =>setAddItems(e.target.value)} placeholder='Enter your items' type="text" name="" id="" />
        <div>
          <button onClick={addBtn}>ADD</button>
          <button>ALL CLEAR</button>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div>
        {
          itemsArr.map((value, index) =>{
            return <div key={index}>
              <div>
                {value.addItems}
              </div>
            </div>
          })
        }
      </div>

    </>
  )
}

export default App
