import { useState } from "react"
import FirstName from "./FirstName"
import TimeOfDay from "./TimeOfDay"
export default function App(){
  return(
    <> 
      <FirstName/><br/>
      <TimeOfDay/>
    </>
  )
}

// "<> </>" empty container 

export default function App(){
  // return an array of differnet vailues 
  const [newItem, setNewItem] = useState("")
  return(
    <>
      <form className="new-item-form"></form>

      <h1 className="header">To-do List</h1>

      <ul className="list">
        <li>
          <label> <input type="checkbox"/>Pickup groceries</label>
        <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label> <input type="checkbox"/>Meal prep</label>
        <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}