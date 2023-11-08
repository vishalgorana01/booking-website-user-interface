import { MyContext } from './Components/Utilities/MyContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [accessToken, setAccessToken] = useState('');

  const authenticiation = async () => {
    const clientId = 'k7xeuPVM6uDe6LqFKld7tM8G9Z9E00Zo'
    const clientSecret = 'uv9IBAlCvzWsZdiv'

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    };

    fetch('https://test.api.amadeus.com/v1/security/oauth2/token', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          setAccessToken(data.access_token);
        } else {
          console.error('Failed to obtain access token');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  useEffect(() => {
    // use with node.js
    // authenticiation()
  }, []);

  return (
    <div className="App flex flex-col items-center justify-center hiddenScrollbar">
      <MyContext.Provider value={{ accessToken, setAccessToken }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/signIn' element={<SignIn />}></Route>
            <Route path='/signUp' element={<SignUp />}></Route>
            <Route path='/destination' element={<Destnation />}></Route>
            <Route path='/destination/hotels' element={<Destnation />}></Route>
            <Route path='/destination/packages' element={<Destnation />}></Route>
            <Route path='/hotel' element={<Hotel />}></Route>
            <Route path='/hotel/rooms' element={<Rooms />}></Route>
            <Route path='/hotel/room' element={<Room />}></Route>
            <Route path='/package' element={<Package />}></Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
