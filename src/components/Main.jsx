import '../style/main.css'
import cards from './Massiv';
import List from './Table';

function Main(props){
    return(
<div className="list">
<div className="cards">
<h1 className="admin__title">Words</h1>
    
    <div className="card__list">
        <div className="card__menu">
          <th className="card__text">№</th>
          <th className="card__text">Word</th>
          <th className="card__text">Transcription</th>
          <th className="card__text">Translation</th>
          <th className="card__text">Edit</th>
        </div>
        </div>

        <div>
        {
        cards.map((itemi, i) =>
        <List
        key = {i}
        number = {itemi.number}
        name = {itemi.name}
        transcription = {itemi.transcription}
        trunslate = {itemi.trunslate}
        />
        )
      }
        </div>
</div>
</div>
    )
}


export default Main;
