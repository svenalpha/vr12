import ReactDOMServer from 'react-dom/server'
import { StaticRouter , Outlet} from 'react-router-dom/server'
import { App } from './App'

export function render(url, context) {   
  console.log(" in entry-server, function render, url = ",url);
  console.log("in entry-server, function render, context = ",context); 
  console.log('in entry-server.....hydrated hydrated hydrated')
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}  >
     console.log('in entry-server.jsx inside static router. location = ',location);
     console.log('in entry-server.jsx inside static router',context = ',context);
      <App />  
    </StaticRouter>, 
     console.log('in entry-server 2.....hydrated hydrated hydrated')
  )
  

}
