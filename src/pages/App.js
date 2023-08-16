import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route,} 
from "react-router-dom";
import '../style/App.css';
import '../index.css';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import AddWord from '../components/AddWord';
import { CollectionWords } from '../context/CollectionWordsContext';

function App() {

const[learnWords, setLearnWords] = useState(0);

const handleLearned = () => {
  setLearnWords (learnWords + 1);
}

  return (
    <CollectionWords>
    <Router>
    <div className="App">
      <Header/>
      <main>
        <Routes>
      <Route exact path="/" element={<Main />}/>
      <Route exact path='/favorites'/>
      <Route path="/game" element={
        <>
        <div className='learnWords'>Words Learned: {learnWords}</div>
      <Card onLearned={handleLearned}/>
      </>
    } />
      {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      </main>
      <Footer/>
    </div>
    </Router>
    </CollectionWords>
  );
}

export default App;
