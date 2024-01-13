
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Container from './components/Container';
import MovieComponent from './components/cataloges/MovieComponent';
import SportComponent from './components/cataloges/SportComponent';
import MusicComponent from './components/cataloges/MusicComponent';
import Profile from './components/Profile/Profile';
import Register from './components/Profile/Register';
import Tickets from './components/Profile/Tickets';
import Logout from './components/Profile/Logout';
import Longin from './components/Profile/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/Movies" element={<MovieComponent />} />
          <Route path="/Music" element={<MusicComponent />} />
          <Route path="/Sport" element={<SportComponent />} />
          <Route path="/signup" element={<h1>hello</h1>} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Tickets" element={<Tickets />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
