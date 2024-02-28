

//import { addAndMultiply } from '../add'
//import { multiplyAndAdd } from '../multiply'
//import UseEffectFetchData from "../UseEffectFetchData";
//import { Link, Route, Routes } from "react-router-dom";
import { useEffect,useState } from "react";  
import axios from "axios";
//import { router } from "../routes/theRoutes.js";

//   import { test88 } from "../routes/theRoutes"

export default function ToProxy() {
const [data,setData] = useState();
const [data2,setData2] = useState();
const [data3,setData3] = useState();
const urlProxy = "/apixx/apixx";  
const urlProxy2 = "/apixx/test99";
const urlProxy3 = "/api/routes/test88";
//const urlProxy4 = "http:/localhost:8080/test88";
//const urlProxy5 = "/test88";
//const urlProxy6 = "/api/routes/test88";
//const urlProxy7 = "http:/localhost:8080/api/routes/test88";


async function  getData(){
 // axios.get("apixx/userz")
  await axios.get(urlProxy)
  .then((res) => setData(res.data))
  .catch((error) => {console.log("urlProxy = ,catch error = ",urlProxy, error);});

  await axios.get(urlProxy2)
  .then((res) => setData2(res.data))
  .catch((error2) => {console.log("urlProxy2 = ,catch error2 = ",urlProxy2, error2);});

  await axios.get(urlProxy3)
  .then((res) => setData3(res.data))
//.then(res =>{console.log("in ToProxy,urlProxy3 /test88 ",res.data);})
.catch((error3) => {console.log("urlProxy3 = ,catch error3 = ",urlProxy3, error3);});




                  }  // end function getData() 



  useEffect(() => {getData();},[]);                              

  

  return (
    <>
      <h1>ToProxy   xxx</h1>
      <p> No. 1 urlProxy   "/apixx/apixx" </p>
      <p>data : {data}</p>
      <p>urlProxy : {urlProxy}</p>
      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p> No 2 urlProxy2  test99   "/apixx/apixx" </p>
      <p>data : {data2}</p>
      <p>urlProxy2: {urlProxy2}</p>
      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p> No 3 urlProxy3  test88   "/api/router" </p>
      <p>data : {data3}</p>
      <p>urlProxy2: {urlProxy3}</p>

      
    </>
  )
}


