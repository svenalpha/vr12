
import { addAndMultiply } from '../add'
import { multiplyAndAdd } from '../multiply'


export default function Home() {
  return (
    <>
      <h1>vr12        Home          no 12      18:25     21/02/2024 </h1>
      <div>{addAndMultiply(1, 2, 3)}</div>   
      <div>{multiplyAndAdd(1, 2, 3)}</div>  
    </>
  )
}




    