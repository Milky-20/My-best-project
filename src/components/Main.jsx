import React, { useContext } from 'react';
import '../style/main.scss'
import List from './Table';
import { CollectionWordsContext } from '../context/CollectionWordsContext';
import AddWord from './AddWord';

function Main(props){
  const {isLoading, dictionary} = useContext(CollectionWordsContext);
  console.log(dictionary);
    return(
      <div>
        <AddWord/>
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
        dictionary.map((itemi, i) =>
        <List
        key = {i}
        number = {itemi.id}
        name = {itemi.english}
        transcription = {itemi.transcription}
        translate = {itemi.russian}
        />
        )
      }
        </div>

</div>
</div>
</div>
    )
}


export default Main;
