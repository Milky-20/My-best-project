import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import './style/index.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import List from './components/Table';



function App() {
  return (
    <Router>
      
    <div className="App">
      <Header/>
      <main>
        <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/game" element={<Card />} />
      {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      </main>
      {/* <Main/>
      <Card/> */}
      <Footer/>

    </div>
    </Router>
  );
}

export default App;
