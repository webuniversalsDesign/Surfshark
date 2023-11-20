import './App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Login from './Pages/Login';

function App() {
  return (

      <BrowserRouter>
         <Routes>
         <Route path="/Login" element={<Login/>}/>

         </Routes>
      </BrowserRouter>
   
  );
}

export default App;
