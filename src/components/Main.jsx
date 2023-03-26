import React from 'react';
import '../style/main.scss'
import cards from '../utils/massiv';
import List from './Table';

function Main(props){
    return(
<div className="list">
<div className="main">
<h1 className="admin__title">Words</h1>

    <div className="main__list">
        <div className="main__menu">
          <th className="main__text">№</th>
          <th className="main__text">Word</th>
          <th className="main__text">Transcription</th>
          <th className="main__text">Translation</th>
          <th className="main__text">Edit</th>
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
