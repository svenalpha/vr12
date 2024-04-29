import { resolve } from "path"; 
import path from "path";
//import terser from "terser";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const outDiry = resolve(__dirname,"dist");  console.log("outDiry = ",outDiry);
const outDirx = resolve(__dirname,"dist/client");  console.log("outDirx = ",outDirx);
const rootx  = resolve(__dirname,"src");   console.log("rootx = ",rootx);
const root = path.join(__dirname,"src"); console.log("root = ",root);
const outDir = path.join(__dirname,"dist/client"); console.log("outDir = ",outDir);


export default defineConfig({
  
  base: '/',


  server:{
          proxy:{"/apixx": { //target : "/",
                             //target: "http://vr12.onrender.com",
                              // target: "http://localhost:5173",  // works in dev
                              // target: "http://192.168.1.5:5173",  // works in dev
                              // target: "http://127.0.0.1:8080",  
                              target: "https://vr12.onrender.com",
                             //  target: (process.env.PORT  || "http://localhost:5173"),
                              changeOrigin: true,
                              secure: false,
                              ws: true, 
                              rewrite: (path) => path.replace(/^\/apixx/,""),

                              configure: (proxy, _options) => {
                                proxy.on('error', (err, _req, _res) => {
                                  console.log('in vite.config  proxy error', err);
                                });
                                proxy.on('proxyReq', (proxyReq, req, _res) => {
                                  console.log('in vite.config, proxy:  Sending Request to the Target:', req.method, req.url);
                                });
                                proxy.on('proxyRes', (proxyRes, req, _res) => {
                                  console.log('in vite.config, proxy:  Received Response from the Target:', proxyRes.statusCode, req.url);
                                });
                              },                          



                            },
                },
         },
  plugins: [react()],
  build: {
    outDir: "/dist/",
    emptyOutDir: true,
    //minify: false,

    minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: false,
                  },                   
                     },
           
  },
})
