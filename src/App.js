import React from 'react'
import './App.css';
//
import { Routes, Route } from "react-router-dom"
import HomePage from './Page/HomePage'
import BasicFormPage from './Page/BasicFormPage'
import StylesPage from './Page/StylesPage';
import StatePage from './Page/StatePage'
import JsxBasicPage from './Page/JsxBasicPage'
import Functions from './Page/Functions'
import TestPage from './Page/TestPage'
// do not forget how routs are made
//$ npm i react-router-dom 
//see package.json
// don't forget to import and use {Link} instead of <a>
//

import Nav from './Component/NAV/Nav'
import Footer from './Component/Footer'

//function App(){}
const App = () => {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path='/Back-to-basics-React/' element={<HomePage />} />
          <Route path='/basicForm' element={<BasicFormPage />} />
          <Route path='/stylesPage' element={<StylesPage />} />
          <Route path='/useState' element={<StatePage />} />
          <Route path='/JsxBasicPage' element={<JsxBasicPage/>} />
          <Route path='/testing' element={<TestPage/>} />
          <Route path='/functions' element={<Functions/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
