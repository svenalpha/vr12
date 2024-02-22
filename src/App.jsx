import {useEffect, useState} from "react";

import { Link, Route, Routes, Outlet } from 'react-router-dom'
//import { app_annexe } from './app_annexe'

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./pages/*.jsx', { eager: true })

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,  
    component: pages[path].default,
  }
})

export function App() {
console.log("in App pages = ",pages);
console.log("in App routes = ",routes);  

// hydrate error solution. see ReadMe.txt  vr08  ////////
const [Show, setShow] = useState(false);
useEffect(()=>{setShow(true)},[]);
if (!Show) {return null} 
/////   end  hydrate error solution. see ReadMe.txt  vr08  ////////

  return (<>
 
    <div>   
<nav>

        <ul>
          {routes.map(({ name, path }) => {
            return (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            )
          })}
        </ul>
</nav>      
 </div>
    
<Routes>
        {routes.map(({ path, component: RouteComp }) => {
          console.log("RouteComp = ",RouteComp);
          return <Route key={path} path={path} element={<RouteComp />}></Route>
        })}
      </Routes>
       



    </>)
}


