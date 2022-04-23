
import './App.css';
import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/Header/NavBar';

import {Routes, Route} from 'react-router-dom';
import { Component } from 'react';




function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      <NavBar />
        <p>
          This will be my home page. I want a login form on the side
        </p>
    </main>
  );
}

export default App;
