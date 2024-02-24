import { resolve } from "path"; 
import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const outDiry = resolve(__dirname,"dist");  console.log("outDiry = ",outDiry);
const outDirx = resolve(__dirname,"dist/client");  console.log("outDirx = ",outDirx);
const rootx  = resolve(__dirname,"src");   console.log("rootx = ",rootx);
const root = path.join(__dirname,"src"); console.log("root = ",root);
const outDir = path.join(__dirname,"dist/client"); console.log("outDir = ",outDir);


export default defineConfig({
  
  base: '/',

  server:{proxy:{"/apixx": { //target: "http://localhost:5173",  
                             target: "https://vr12.onrender.com",
                              changeOrigin: true,
                              secure: false,
                              ws: true, 
                              rewrite: (path) => path.replace(/^\/apixx/,"apixx"),

                              configure: (proxy, _options) => {
                                proxy.on('error', (err, _req, _res) => {
                                  console.log('proxy error', err);
                                });
                                proxy.on('proxyReq', (proxyReq, req, _res) => {
                                  console.log('Sending Request to the Target:', req.method, req.url);
                                });
                                proxy.on('proxyRes', (proxyRes, req, _res) => {
                                  console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
                                });
                              },                          



                            },
                },
         },
  plugins: [react()],
  build: {
    outDir: "/dist/",
    emptyOutDir: true,
    minify: false,
  },
})
