
//import axios, * as others from "axios";
import * as axios from "axios";
//import axios from "axios";


//export default axios.create({
//  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5173",
//                            });

const apiax = () => {  axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5173",
});          
                    };      
                    
                    

// export const  apiax= axios.create({
//  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5173",
//                           });   
export default apiax;



