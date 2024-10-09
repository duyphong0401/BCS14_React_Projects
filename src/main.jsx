import { createRoot } from 'react-dom/client'

import App from './App'

// c2: import bootstrap từ node module
// import bootstrap from 'bootstrap'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
createRoot(document.getElementById('root')).render(

  //JSX: đối tượng thẻ UI của reactjs
  // Chỉ nên có 1 component
  <App />

)
