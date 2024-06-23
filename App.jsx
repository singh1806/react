// src/App.jsx
import React from 'react';
import './App.css'; // Import main app styles
import Header from './header';
import MainContent from './mainContent';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
