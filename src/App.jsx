import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import CoursesPage from "./Pages/CoursesPage.jsx";
import Navbar  from "./Components/Navbar.jsx"
import TestimonialPage from "./Pages/TestimonialPage.jsx";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/CoursesPage" element={<CoursesPage/>}/>
       <Route path="/testimonials" element={<TestimonialPage/>}/>
       {/* <Route path="/Contact" element={<Contact/>}/>  */}
    </Routes>

    </BrowserRouter>
  
  )
}

export default App
