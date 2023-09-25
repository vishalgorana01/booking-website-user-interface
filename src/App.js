import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Destnation from './Pages/Destnation';

import '../src/Assets/CSS/Global.css'

function App() {
  return (
    <div className="App flex flex-col items-center justify-center hiddenScrollbar">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/Destination' element={<Destnation />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
