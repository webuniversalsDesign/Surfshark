import './App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (

      <BrowserRouter>
         <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/Home" element={<Home/>}/>

         </Routes>
      </BrowserRouter>
   
  );
}

export default App;
