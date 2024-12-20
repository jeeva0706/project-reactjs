// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Teachers from './Pages/Teachers';
import BlogList from './Pages/BlogList';
import BlogDetails from './Pages/BlogDetails';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import { Adminpage } from './Admin/Adminpage';
import { Dashboard } from './Admin/Dashboard';
import { Categorie } from './Admin/Categorie.jsx';
import { Addblog } from './Admin/Addblog.jsx';
import { Manageblog } from './Admin/Manageblog.jsx';
import {  Addcourse } from "./Admin/Addcourse.jsx";
import { Managecourse } from './Admin/Managecourse.jsx';
import { Addfrom } from './Admin/Addfrom.jsx';
import { Managefrom } from './Admin/Managefrom.jsx';

// import BackToTopButton from './Pages/Backtotop';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path='/admin' element={ <LoginAdmin /> } /> */}
          <Route path='/admin' element={< Adminpage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/categorie' element={<Categorie />} />
          <Route path='/add-blog' element={<Addblog />} />
          <Route path='/manage-blog' element={ <Manageblog /> } />
          <Route path='/add-course' element={ <Addcourse /> } />
          <Route path='/manage-course' element={ <Managecourse /> } />
          <Route path='/add-form' element={ <Addfrom /> } />
          <Route path='/manage-form' element={ <Managefrom /> } />
        </Routes>
        {/* <BackToTopButton /> */}
      </div>
    </Router>
  );
}

export default App;

