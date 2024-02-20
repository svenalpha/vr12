do: npm install 

(almost) working model of multi-page SSR vite/express/react from: 

https://github.com/vitejs/vite-plugin-react/tree/main/playground/ssr-react

slightly changed with:
1) because of age of this demo project, all dependantcies in 
package.json updated with newest version 
2)  a bit of css added
3)another page "extra" added
4) UseEffectFetchData added 



to make work:
in package.json
          "@vitejs/plugin-react": "workspace:*",
provoked  an error. It was changed to:
          "@vitejs/plugin-react": "^4.0.4",


do:    npm run dev   //  for development version     
do:  npm run build  // for production version (ie creates dist directory)
difficulty with preview of build version, at command prompt did:
NODE_ENV=production node server  // which seemed to work correctly 

error message: expected server HTML to contain a amatchin <NAV> in <DIV>


https://stackoverflow.com/questions/45390377/react-how-to-pass-returned-data-from-an-exported-function-to-a-component

"name": "@vitejs/test-ssr-react",


can't be found with:
npm run build
NODE_ENV  production
no dev dependencies


"@vitejs/plugin-react":"^4.0.4",
 "@vitejs/plugin-react":"workspace:*",

outDir: path.join(__dirname, "dist"),
import path from "path";

 root: "src",
 outDir: "/dist/client/",     
   root: "/client/",

 basename="/vr08.onrender.com"
 basename={"/vr08.onrender.com"}      




//////////////////////////   to index.html     ////////////////////
    <script type="text/javascript">
      (function (l) {
        if (l.search[1] === "/") {
          var decoded = l.search
            .slice(1)
            .split("&")
            .map(function (s) {
              return s.replace(/~and~/g, "&");
            })
            .join("?");
          window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
        }
      })(window.location);
    </script>
//////////////////////////   end   to index.html     ////////////////////
///////////////////// 2nd line in package.json   ///////////////////////////////
"homepage": "https://vr08.onrender.com",
///////////////////// end  2nd line in package.json   ///////////////////////////////


 /*    basename="/vr08.onrender.com"   */


  "dependencies": {
    "@vitejs/plugin-react": "^4.0.4",
    "compression": "^1.7.4",
    "express": "^4.18.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.2",
    "serve-static": "^1.15.0",
    "vite": "^4.4.9"
  }


<ul>

  {routes.map(({ name, path }) => {
    
    return (<li key={path}>
        <Link to={path}>{name}</Link>
        </li>)
     

  })}
</ul>

<Routes>
        {routes.map(({ path, component: RouteComp }) => {
          return <Route key={path} path={path} element={<RouteComp />} ></Route>
        })}
</Routes>   

//////   react hydrate error fix in app.jsx  ///// (error #418/#423)   "Expected 
server HTML to contain a matching <div> in <div>."
import {useEffect, useState} from "react";
............
app{
const [Show, setShow] = useState(false);


    
..................
//////  end  react hydrate error fix in app.jsx  /////







