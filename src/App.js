import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
// import cards from './components/Massiv';

const cards = [
  {
    number: "1",
    name: "Story",
    transcription: "ˈstɔː.ri ",
    trunslate: "История",
  },
  {
    number: "2",
    name: "Sea",
    transcription: " siː ",
    trunslate: "Море",
  }
]

function App() {
  return (
    <div className="App">
      <Header/>
      {
        cards.map((itemi) =>
        <Main
        number = {itemi.number}
        name = {itemi.name}
        transcription = {itemi.transcription}
        trunslate = {itemi.trunslate}
        />
        )
      }
   {
    cards.map((cardi) =>
    <Card
    name = {cardi.name}
    transcription = {cardi.transcription}
    trunslate = {cardi.trunslate}
    />
    )
   }
   <Footer/>
    </div>
  );
}

export default App;
