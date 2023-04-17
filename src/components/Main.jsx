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
          <a className="main__text">№</a>
          <a className="main__text">Word</a>
          <a className="main__text">Transcription</a>
          <a className="main__text">Translation</a>
          <a className="main__text">Edit</a>
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
        translate = {itemi.translate}
        />
        )
      }
        </div>

</div>
</div>
    )
}


export default Main;
