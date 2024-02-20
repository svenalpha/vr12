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
  plugins: [react()],
  build: {
    outDir: "/dist/",
    emptyOutDir: true,
    minify: false,
  },
})
