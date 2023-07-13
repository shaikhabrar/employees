import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './login';
import FileUploader from './fileUploader';
import Signup from './signup';
import './FileUploader.css';
import Popup from './popup';
import Birthdays from './birthdays';
import HomePage from './HomePage';

// ReactDOM.render(<HomePage />, document.getElementById('root'));


const App = () => {
  return (<>
    <Router>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/signUp" element={<Signup/>} />
      <Route path="/Fileuploader" element={<FileUploader/>} />
      <Route path="/popup" element={<Popup/>} />
      <Route path="/birthdays" element={<Birthdays/>} />
      <Route path="/homePage" element={<HomePage/>} />

    </Routes>
  </Router>
  </>
  );
};

export default App;
