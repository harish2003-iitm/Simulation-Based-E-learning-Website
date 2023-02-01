
import './App.css';
import Signup from './features/signup';
import About from './features/about';
import Contact from './features/contact';
import Error from './features/error';
import Courses from './features/courses';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from './features/home';
import Login from './features/login';
const App=() => {
  return (
    <main className='container-fluid main-css'>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error  />} />


        </Routes>
      </BrowserRouter>
    </main>








  );
}

export default App;
