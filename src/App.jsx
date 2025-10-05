import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/courses" elemment={<Courses/>}/>
      <Route path="/testimonials" elemment={<Testimonials/>}/>
      <Route path="/Contact" elemment={<Contact/>}/> */}
    </Routes>

    </BrowserRouter>
  
  )
}

export default App
