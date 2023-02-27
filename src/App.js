import './App.css';
import Card from './components/Card'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import cards from './components/Massiv';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
   {/* {
    cards.map((cardi, i) =>
    <Card
    key = {i}
    name = {cardi.name}
    transcription = {cardi.transcription}
    trunslate = {cardi.trunslate}
    />
    )
   } */}
   <Card/>
   <Footer/>
    </div>
  );
}

export default App;
