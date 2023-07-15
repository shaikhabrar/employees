import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Login from "./login";
import FileUploader from "./fileUploader";
import Signup from "./signup";
import "./FileUploader.css";
import Popup from "./popup";
import Birthdays from "./birthdays";
import HomePage from "./HomePage";
import { toast } from 'react-toastify';


const App = () => {
  const isLoggedIn = sessionStorage.getItem("loggedinUserData")?.length > 0;

  const PrivateRoute = ({ element: Component, ...props }) => {
    return isLoggedIn ? <Component {...props} /> : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route
          path="/Fileuploader"
          element={<PrivateRoute element={FileUploader} />}
        />
        <Route path="/popup" element={<PrivateRoute element={Popup} />} />
        <Route
          path="/birthdays"
          element={<PrivateRoute element={Birthdays} />}
        />
        <Route path="/homePage" element={<PrivateRoute element={HomePage} />} />
      </Routes>
    </Router>
  );
};

export default App;
