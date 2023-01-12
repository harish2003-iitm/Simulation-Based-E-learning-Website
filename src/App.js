
import './App.css';
import Signup from './features/signup';
import About from './features/about';
import Contact from './features/contact';
import Error from './features/error';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from './features/home';

const App=() => {
  return (
    <main className='container'>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/page-not-found" element={<Error />} />
          <Route path="/signup" element={<Signup />} />


        </Routes>
      </BrowserRouter>
    </main>








  );
}

export default App;
