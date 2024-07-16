import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
//import Main from './components/Main';
import DestinationPage from './components/DestinationPage';
//import Footer from './Components/Footer';
import './App.css';
import Main from './components/Main';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
  
        <Route path="/" element={<Main />} />
        <Route path="/DestinationPage" element={<DestinationPage />} />
      </Routes>
      
    </Router>
  );
};

export default App;
