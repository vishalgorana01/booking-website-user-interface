import logo from './logo.svg';
import './App.css';
import '../src/Assets/CSS/Global.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Destnation from './Pages/Destnation';
import Hotel from './Pages/Hotel';
import Package from './Pages/Package'
import Rooms from './Pages/Rooms';
import Room from './Pages/Room';


function App() {
  return (
    <div className="App flex flex-col items-center justify-center hiddenScrollbar">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/destination' element={<Destnation />}></Route>
        <Route path='/hotel' element={<Hotel />}></Route>
        <Route path='/rooms' element={<Rooms />}></Route>
        <Route path='/room' element={<Room />}></Route>
        <Route path='/package' element={<Package />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
