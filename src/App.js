// import logo from './logo.svg';
// import PropTypes from 'prop-types'
import TextForm from './components/TextForm'
import './App.css'
import About from './components/About'
import Navbar from './components/Navbar';
import { useState } from 'react';
// import Alert from './components/Alert';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
      document.title = 'Text Utils : Light Mode'
      
      // setInterval(() => {
      //   document.title='TextVista is amazing !';
      // }, 1000);
      // setInterval(() => {
      //   document.title='Install TextVista  now !';
      // }, 1200);
    }

    else {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      document.title = 'Text Utils : Dark Mode'
      

    }
  }

  return (
    <>
      <Router basename="/TextVista">
      <Navbar title="TextVista" mode={mode} toggleMode={toggleMode}  />
      {/* <Alert alert = {alert}/>   */}
      <div className="container my-3">
        <Routes>   
          <Route exact path="/about" element={<About heading="ABOUT US" mode={mode} toggleMode={toggleMode} />  } />
          <Route exact path="/TextVista" element={<TextForm heading="Enter the text to analyse below "
                mode={mode} />} />
        </Routes>
      </div>
   </Router>
    </>
  );
}

export default App;
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired
// }
// Navbar.defaultProps = {
//   title: "Set title (default)",
//   aboutText: "About text (default)"
// };
