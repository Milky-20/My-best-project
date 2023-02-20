import '../style/main.css'
import cards from './Massiv';
import List from './List';

function Main(props){
    return(
<div className="list">
<div className="cards">
<h1 className="admin__title">Words</h1>
    
    <div class="card__list">
        <div class="card__menu">
          <span class="card__text">№</span>
          <span class="card__text">Word</span>
          <span class="card__text">Transcription</span>
          <span class="card__text">Translation</span>
          <span class="card__text">Edit</span>
        </div>
        </div>

        <div>
        {
        cards.map((itemi) =>
        <List
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
