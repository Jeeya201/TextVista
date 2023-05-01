import logo from './logo.svg';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm'
import './App.css'
import About from './components/About'
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
      document.title = 'Text Utils : Light Mode'
      // setInterval(() => {
      //   document.title='TextUtils is amazing !';
      // }, 1000);
      // setInterval(() => {
      //   document.title='Install TextUtils  now !';
      // }, 1200);
    }

    else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      document.title = 'Text Utils : Dark Mode'

    }
  }

  return (
    <>
      <Router>
      <Navbar title="Jee" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About heading="ABOUT US" mode={mode} toggleMode={toggleMode} />  } />
          <Route path="/" element={<TextForm heading="Enter the text to analyse below "
                mode={mode} />} />
        </Routes>
      </div>
   </Router>
    </>
  );
}

export default App;
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "Set title (default)",
  aboutText: "About text (default)"
};
