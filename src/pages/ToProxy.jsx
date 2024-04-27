

//import { addAndMultiply } from '../add'
//import { multiplyAndAdd } from '../multiply'
//import UseEffectFetchData from "../UseEffectFetchData";
//import { Link, Route, Routes } from "react-router-dom";
import { useEffect,useState } from "react";  
//import axios from "axios";
//import    apiax     from "../services";
//import { router } from "../routes/theRoutes.js";
//import axios, * as others from "axios";
//import * as axios from "axios";
import axios from "axios";
//import { test88 } from "../routes/theRoutes"

export default function ToProxy() {
const [data,setData] = useState();
const [data2,setData2] = useState();
const [data3,setData3] = useState();
const [data4,setData4] = useState();
const [data5,setData5] = useState();
const urlProxy = "/apixx";  
const urlProxy2 = "/apixx/test99";     //  proxy   
//const urlProxy2 = "/opt/render/project/src/dist/server/message/entry-server/apixx/test99";
const urlProxy3 = "/api/routes/test88";  // using router
//const urlProxy4 = "/message";
const urlProxy4 ="/opt/render/project/src/dist/server/message/entry-server/message";
//const urlProxy4 = "http:/localhost:8080/test88";
//const urlProxy5 = "/test88";
//const urlProxy6 = "/api/routes/test88";
//const urlProxy7 = "http:/localhost:8080/api/routes/test88";


        
async function  getData(){
  //var  imu, per, vbaseURL;
  //console.log(" in ToProxy, import.meta.url ", import.meta.url);
  //console.log(" in ToProxy, process.env.REACT_APP_BASE_URL =  ", process.env.REACT_APP_BASE_URL);
  //console.log(" in ToProxy, baseURL =", baseURL);

  const apiax = () => {  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5173",
      
  });
            
                      };      
                      
    


/*UU*/  
 //axios.get("apixx/test99")
  await axios.get(urlProxy,{
    headers: {'Content-Type': 'application/json'}
  })
  .then((res) => setData(res.data))
  .catch((error) => {console.log("urlProxy = ,catch error = ",urlProxy, error);});

  await axios.get(urlProxy2,{
    headers: {'Content-Type': 'application/json'}
  })
  .then((res) => setData2(res.data))
  .catch((error2) => {console.log("urlProxy2 = ,catch error2 = ",urlProxy2, error2);});


  await axios.get(urlProxy3,{
    headers: {'Content-Type': 'application/json'}
  })
  .then((res) => setData3(res.data))
//.then(res =>{console.log("in ToProxy,urlProxy3 /test88 ",res.data);})
.catch((error3) => {console.log("urlProxy3 = ,catch error3 = ",urlProxy3, error3);});



/*UU*/

await axios.get(urlProxy4,{
  headers: {'Content-Type': 'application/json'}
})
.then((res) => setData4(res.data))
//.then(res =>{console.log("in ToProxy,urlProxy3 /test88 ",res.data);})
.catch((error4) => {console.log("urlProxy3 = ,catch error3 = ",urlProxy4, error4);});


/*ZZ 
//const response =  await apiax.get("/message");
//setData5(response);

await apiax.get("/message",{
  headers: {'Content-Type': 'application/json'}
})
.then((res) => setData5(res.data))
.then(res =>{console.log("in ToProxy,urlProxy3 /test88 ",res.data);})
.catch((error5) => {console.log("urlProxy5 = ,catch error5 = ",urlProxy4, error5);});
ZZ*/

//await apiax({method: 'GET',
              //url: "/api/getWorkout", 
              //url: "http://localhost:5173/getWorkouts", 
              //url: "https://jasnplaceholder.typicode.com/todos", 
//              withCredentials: false,
//              params: { _limit: 2 }, 
           //data: JSON.stringify(fetchOptions.data),
           //responseType: 'arraybuffer',
           //responseEncoding: 'binary',
//           headers: {//'Content-Type': 'application/vnd.api+json',
//                     // 'Content-Type': 'text/plain;charset=ISO-8859-15',
//                     'Content-Type': 'application/vnd.api+json;text/plain;charset=ISO-8859-15',
//                      Accept: 'application/vnd.api+json',
//                    }
            //config: {params: {_limit: 2 }},        
                     
//                  })      





                  }  // end function getData() 


                  

  useEffect(() => {getData();},[]);                              

  

  return (
    <>
      <h1>ToProxy   xxx</h1>
      <h3></h3>
      <p> No. 1 urlProxy   "/apixx" </p>
      <p>data : {data}</p>
      <p>urlProxy : {urlProxy}</p>
      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p> No 2 urlProxy2  test99   "/apixx/apixx" </p>
      <p>data : {data2}</p>
      <p>urlProxy2: {urlProxy2}</p>
      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p> No 3 urlProxy3  test88   "/api/router" </p>
      <p>data : {data3}</p>
      <p>urlProxy3: {urlProxy3}</p>
      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p> No 4 urlProxy4     "/message" </p>
      <p>data : {data4}</p>
      <p>urlProxy4: {urlProxy4}</p>
      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p> No 5    /message     from   apiax            </p>
      <p>data : {data5}</p>
      <p>urlProxy5: no proxy  </p>
     
    </>
  )
}


