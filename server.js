import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from "cors";
import { router } from "./src/routes/theRoutes.js";

/*  import express from '../vr08/node_modules/express/lib/express.js';   */

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const isTest = process.env.VITEST
 /* ViteExpress.config({ mode: "production" }) */
 
 

// line below in wrong place see https://vitejs.dev/guide/ssr and
// https;//www.npmjs.com/package/vite-ssr
const app = express();  // this line placed inside createServer as  


app.use("/api/routes",router);   // per https://vitejs.dev/guide/ssr. (Therefore  
  //                           // presumably app.use also belongs here. 
app.use(express.static(path.join(__dirname, "dist\\server", "client")));

app.use(cors());
app.use(function(req,res,next){
      console.log("in server.js app.use res.headers");  
      res.header("Access-Control-Allow-Origin","*");
      res.header("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT,DELETE");
      res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
      if ('OPTIONS' == req.method) {res.send(200);}
      next();
                              } 
       );

       app.get("/apixx",(req,res) =>{
        res.send("hello world via proxyyyggyyyyy WITH apixx");
      });  
      
      
      app.get("/apixx/test99",(req,res) =>{
        res.send("hello world via proxyyyggyyyyy WITH apixx in test99");
      }); 
      /*BB*/
      
      



 // app.use(express.static(path.join(__dirname, "..", "dist")));. Your pat

if (process.env.NODE_ENV =='production'){ 
  //app.use(express.static("dist/server/client"));
  
}



console.log("path.join(__dirname, '..', 'dist')  =    ",path.join(__dirname, "..", "dist"));
console.log("path.join(__dirname, '', 'dist')  =    ",path.join(__dirname, "", "dist"));
console.log("path.join(__dirname, '..', 'client')  =    ",path.join(__dirname, "..", "client"));
console.log("path.join(__dirname, '', 'client')  =    ",path.join(__dirname, "", "client"));
//console.log("path.join(__dirname, '\vr12', 'client')  =    ",path.join(__dirname, "\vr12", "client"));
console.log("path.join(__dirname, 'dist\\server', 'client')  = ",path.join(__dirname, "dist\\server", "client"));

//console.log(" import.meta.url ", import.meta.url);

process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop'

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
  hmrPort,
) {

  console.log(" in server, after root=process.cwd() ", root);
                         

  const resolve = (p) => path.resolve(__dirname, p)

  const indexProd = isProd
    ? fs.readFileSync(resolve('dist/server/client/index.html'), 'utf-8')
    : ''

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite
  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
      appType: 'custom',
    })
    // use vite's connect instance as middleware
    app.use(vite.middlewares)
  }  else {
    app.use((await import('compression')).default())
    app.use(
      (await import('serve-static')).default(resolve('dist/server/client'), {
        index: false,
      }),
    )
  }  

  app.get("/message", (_, res) => res.send("inside message before  app.use('*'   "));
  app.get("/userz3",(req,res,next) =>             
  {res.send([{                    
    id: 1,            
    name: "John Doooe",                
    age: 43              
             },       
             {              
   id: 2,                   
   name: "Jane Dough",      
   age: 26               
           }]); 
         next();            
  }                             
       );                      
       app.get("/userz4",(req,res,next) =>             
       {res.send([{                    
         id: 1,            
         name: "John Doooe",                
         age: 43              
                  },  
                  
                  {                    
                    id: 2,            
                    name: "Peter Smith",                
                    age: 52              
                  },                   
                  {              
        id: 3,                   
        name: "Jane Dough",      
        age: 26               
                }]); 
              next();            
       }                             
            );              
            app.get("/userz5",(req,res,next) =>             
            {res.send([{                    
              id: 1,            
              name: "John Doooe",                
              age: 43              
                       },
                       {                    
                        id: 2,            
                        name: "Billy Jones",                
                        age: 51              
                                 },                      
                                 {                    
                                  id: 3,            
                                  name: "Frankie Boggs",                
                                  age: 62              
                                           },                       

                       {              
             id: 4,                   
             name: "Jane Dough",      
             age: 26               
                     }]); 
                   next();            
            }                             
                 );              







  app.use('*', async (req, res) => {

   
    try {
      const url = req.originalUrl

      let template, render
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
      } else {
        template = indexProd
        // @ts-ignore
        render = (await import('./dist/server/entry-server.js')).render
      }

      const context = {}
      const appHtml = render(url, context)

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        return res.redirect(301, context.url)
      }

      const html = template.replace(`<!--app-html-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })    // end  app.use('*', async (req, res) => {

//app.listen(5173);  
//  app.listen(process.env.PORT, () => {
//    const port =process.env.PORT;
//    console.log('http://localhost:5173 with (!isTest) connected to daaaata base. process.env.POR = , port = ', process.env.PORT , port)
//                                     }                           
//            )   //  end    app.listen(process.env.PORT, () => { 



//app.listen(5173);


//mongoose.connect(api_key, {UseNewUrlParser: true,UseUnifiedTopology:true})                                                                                                                                       
//.then((result)=>{app.listen(process.env.PORT || 5173); //ie localhost:3333/3334   // 5173        
//                 console.log("connected to daaaata base");
//                })
//.catch((err)=>console.log(err));




  return { app, vite }
}  //  end  export async function createServer(.......{
                      
                            
/*BB*/                           
app.get("/userz",(req,res) =>             
  {res.send([{                    
    id: 1,            
    name: "Billy Smith",                
    age: 87              
             },       
             {              
   id: 2,                   
   name: "Brenda Jones",      
   age: 74               
           }])          
  }                              
       );                                    

 

let  api_key = process.env['MONGO_URI_FROM_ENV'];
  /*GG*/
  // working example for logging on to mongo db    
  //if (!isTest)
  //  {
  //mongoose.connect("mongodb+srv://userx:6j5pbHRxwLanqaq4@cluster0.t8319.mongodb.net/Project0?retryWrites=true&w=majority", {UseNewUrlParser: true,UseUnifiedTopology:true})
  mongoose.connect(api_key, {UseNewUrlParser: true,UseUnifiedTopology:true})
  .then(createServer().then(({ app }) =>//   {app.listen(5173); //ie localhost:3333/3334   // 5173        
  // console.log("with (!isTest) connected to daaaata base");
                                        //}                                                                            
                                        app.listen(process.env.PORT || 5173, () => {
                                          const port =process.env.PORT;
                                          console.log('server started http://localhost:5173 with (!isTest) connected to daaaata base. process.env.POR = , port = ', process.env.PORT , port)
                                        }),
                           )
       )                                                                      
   .catch((err)=>console.log("MongoDB connect error = ",err));
    //}   // end if (!isTest)
  /*GG*/







//app.listen(5173);  
/*KK
  app.listen(process.env.PORT, () => {
    const port =process.env.PORT;
    console.log('http://localhost:5173 with (!isTest) connected to daaaata base. process.env.POR = , port = ', process.env.PORT , port)
                                     }                           
            )   //  end    app.listen(process.env.PORT, () => { 
KK*/



/*YY
//  else    //  ie (isTest)
//  {
     mongoose.connect(api_key, {UseNewUrlParser: true,UseUnifiedTopology:true})                                                                                                                                       
    .then((result)=>{app.listen(process.env.PORT || 5173); //ie localhost:3333/3334   // 5173        
                     console.log("connected to daaaata base");
                    })
    .catch((err)=>console.log(err));
//  }  // end   if (!isTest)
YY*/



//if (!isTest) {
//  createServer().then(({ app }) =>
//    app.listen(5173, () => {
//      console.log('http://localhost:5173')
//    }),
//  )
//}
