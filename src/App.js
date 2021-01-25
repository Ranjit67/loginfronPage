
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./Login/Login";



function App() {
  
  return (
    <div>
   
     
         <BrowserRouter>
      <Route path="/" component={Login} />
         </BrowserRouter>
    
        
    </div>
  );
}

export default App;
