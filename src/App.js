
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
import Timer from './component/timer';
import { createContext, useReducer } from "react";
import { initialState, reducer } from './component/reducer/useReducer';
import StopWatch from './component/stopwatch';
export const UserContext = createContext();
const App=() => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <main className='container-fluid main-css'>
      <BrowserRouter>
        <UserContext.Provider value={{state, dispatch}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error  />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
      {localStorage.getItem("token") && true ? <StopWatch/> : "" }
      
    </main>








  );
}

export default App;
