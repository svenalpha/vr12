
import express from 'express';

import mongoose from 'mongoose';
export const router = express.Router(); 

       

/*
router.get("/Env",(req,res)=>{ console.log("req = ",req);
                               res.json({mssg: "ASDFGHHjhjjuj"});
                               console.log("res.json = ",res.json);  
                               console.log("inside router.get /Env"); 
                             return(  res.redirect("/Error404") );
                             }                          
          );                              
*/


router.get("/test77",(req,res)=>{console.log("in theRoutes, router.get /test88");
                                 res.json({mssg: "inside test77 in theRoutes.js"});
                                }                                                                                 
          );  
router.get("/test88",(req,res) =>{
          res.send("inside test88 ggggggggggggggggggggggh ");
      });         
          



//router.get("/*",(req,res)=>{/* res.json({mssg: "404/404/404/404"}); */       
//                           /* res.sendFile('../pages/Error404',{root: __dirname});   */  
//                           /* res.render('../pages/Error404',{root: __dirname});  */  
//                           /* console.log("inside router.get(/*"); */
//                           /* res.redirect("/Error404");  */
//                           console.log("in router.get(/*  etc");
//                           return("aaaaaaargh"); 
//                          }                              
//          );                                                
/*  module.exports=router;  */ 
 export default router; 



