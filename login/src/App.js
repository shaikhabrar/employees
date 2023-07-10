import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './login';
import FileUploader from './fileUploader';
import './FileUploader.css';
import Popup from './popup';
import Birthdays from './birthdays';
import Header from './header';


const App = () => {
  return (<>
    <Router>
    {/* <Header /> */}
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/Fileuploader" element={<FileUploader/>} />
      <Route path="/popup" element={<Popup/>} />
      <Route path="/birthdays" element={<Birthdays/>} />

    </Routes>
  </Router>
  </>
  );
};

export default App;
