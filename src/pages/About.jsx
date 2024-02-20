import { addAndMultiply } from '../add'
import { multiplyAndAdd } from '../multiply'
import "../app.css";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <h4 className="strClass">inside change no.  21 express installed globally</h4>  
      <div>{addAndMultiply(1, 2, 3)}</div>  
       <div>{multiplyAndAdd(1, 2, 3)}</div>   
    </>
  )
}
