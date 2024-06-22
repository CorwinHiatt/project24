import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage'; // Uncommented to include ProjectsPage
import ContactPage from './pages/ContactPage'; // Uncommented to include ContactPage
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} /> // Corrected the path to match the component name
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}



import React, { useState } from 'react';

function App() {
    const [theme, setTheme] = useState('light'); // Default theme is light

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={theme + '-theme'}>
            {/* Rest of your app components */}
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default App;