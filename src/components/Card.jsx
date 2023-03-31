import React, {useState} from 'react';
import '../style/card.scss';
import cards from '../utils/massiv.js';

function Card (props) {
  const [pressed, setPressed] = useState(false);
  const [index, setIndex] = useState(0);
  const [viewCard, setViewCard] = useState(false);

  const handleChange = () => {
      setPressed(!pressed);
      if(!viewCard) {
        setViewCard(true);
        props.onLearned();
      }
  }

let onecard = cards[index];

const cardForward = () => {
if (index + 1 >= cards.length){
  setIndex(0);
} else  setIndex(index + 1);
setViewCard(false);
setPressed(false);
}

const cardBack = () => {
if (index - 1 < 0){
  setIndex(cards.length - 1);
} else setIndex(index - 1);
setViewCard(false);
setPressed(false);
}

return(
  <div>
   
    <div className='card' {...index}>
      <div>
      <div className='card-name'><h2>{onecard.name}</h2></div>  
        <div className='card-transcription'><p>[{onecard.transcription}]</p></div>
       <div><p className='card-trunslate'>{onecard.trunslate}</p></div> 
       <button className='card-btn' onClick={handleChange}>{pressed ? onecard.trunslate: "Trunslate"}</button>
       </div>
    </div>
     <div>
     
     <button className='card__btn__back' onClick={cardBack}>Назад</button>
    <button className='card__btn__forward' onClick={cardForward}>Вперед</button>
     </div>
     </div>
)
}

export default Card;