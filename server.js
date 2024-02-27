import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config';


/*  import express from '../vr08/node_modules/express/lib/express.js';   */



const app = express()


const __dirname = path.dirname(fileURLToPath(import.meta.url))

const isTest = process.env.VITEST

/*  ViteExpress.config({ mode: "production" })  */


process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop'

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
  hmrPort,
) {
  const resolve = (p) => path.resolve(__dirname, p)

  const indexProd = isProd
    ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
    : ''

    

  

  app.get("/message", (_, res) => res.send("Hello from express!"));


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
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false,
      }),
    )
  }  

  
  
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
  })

  return { app, vite }
}  

app.get("/userz",(req,res) => 
  {res.send([{
    id: 1,
    name: "John Doe",      
    age: 43 
             },
             {
   id: 2,
   name: "Jane Dough",      
   age: 26               
             }])    
                          
  }                             
        );   



app.get("/apixx",(req,res) =>{
  res.send("hello world via proxyyyggyyyyy WITH apixx");

});  

app.get("/apixx/test99",(req,res) =>{
  res.send("hello world via proxyyyggyyyyy WITH apixx in test99");

}); 

let api_key = process.env['MONGO_URI_FROM_ENV'];

if (!isTest)
  {
//mongoose.connect("mongodb+srv://userx:6j5pbHRxwLanqaq4@cluster0.t8319.mongodb.net/Project0?retryWrites=true&w=majority", {UseNewUrlParser: true,UseUnifiedTopology:true})
mongoose.connect(api_key, {UseNewUrlParser: true,UseUnifiedTopology:true})
.then(createServer().then(({ app }) =>//   {app.listen(5173); //ie localhost:3333/3334   // 5173        
                                      // console.log("with (!isTest) connected to daaaata base");
                                      //}                                                                            
                                      app.listen(process.env.PORT, () => {
                                        const port =process.env.PORT;
                                        console.log('http://localhost:5173 with (!isTest) connected to daaaata base. process.env.POR = , port = ', process.env.PORT , port)
                                      }),
                         )
     )                                                                      
 .catch((err)=>console.log("MongoDB connect error = ",err));
  }
//  else    //  ie (isTest)
//  {mongoose.connect(api_key, {UseNewUrlParser: true,UseUnifiedTopology:true})                                                                                                                                       
//    .then((result)=>{app.listen(process.env.PORT || 3334); //ie localhost:3333/3334   // 5173        
//                     console.log("connected to daaaata base");
//                    })
//    .catch((err)=>console.log(err));
//  }  // end   if (!isTest)
//



//if (!isTest) {
//  createServer().then(({ app }) =>
//    app.listen(5173, () => {
//      console.log('http://localhost:5173')
//    }),
//  )
//}
