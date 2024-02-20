import ReactDOMServer from 'react-dom/server'
import { StaticRouter , Outlet} from 'react-router-dom/server'
import { App } from './App'

export function render(url, context) {   
  console.log(" url = ",url);
  console.log("context = ",context); 
  console.log('in entry-server.....hydrated hydrated hydrated')
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}  >
      <App />  
    </StaticRouter>, 
     console.log('in entry-server 2.....hydrated hydrated hydrated')
  )
  

}
