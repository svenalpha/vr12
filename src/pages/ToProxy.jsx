

//import { addAndMultiply } from '../add'
//import { multiplyAndAdd } from '../multiply'
//import UseEffectFetchData from "../UseEffectFetchData";
import { useEffect,useState } from "react";  
import axios from "axios";

export default function ToProxy() {
const [data,setData] = useState();
const [data2,setData2] = useState();
const urlProxy = "/apixx/apixx";  
const urlProxy2 = "/apixx/test99";

function getData(){
 // axios.get("apixx/userz")
  axios.get(urlProxy)
  .then((res) => setData(res.data))
  .catch((error) => {console.log("urlProxy = ,catch error = ",urlProxy, error);});

  axios.get(urlProxy2)
  .then((res) => setData2(res.data))
  .catch((error2) => {console.log("urlProxy2 = ,catch error2 = ",urlProxy2, error2);});



                  } 



  useEffect(() => {getData();},[]);                              

  

  return (
    <>
      <h1>ToProxy   xxx</h1>
      <p>data : {data}</p>
      <p>urlProxy : {urlProxy}</p>
      <p>data : {data2}</p>
      <p>urlProxy : {urlProxy2}</p>

    </>
  )
}


