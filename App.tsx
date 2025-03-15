import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import Mission from './sections/Mission';
import Executives from './sections/Executives';
import Events from './sections/Events';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main className="overflow-hidden">
        <Home />
        <Mission />
        <Executives />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

export default App;