import React, {useState} from 'react';
import '../style/card.css';

function Card (props) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
      setPressed(!pressed);
  }

return(
    <div className='card'>
      <div className='card-name'><h2>{props.name}</h2></div>  
        <div className='card-transcription'><p>[{props.transcription}]</p></div>
       <div><p className='card-trunslate'>{props.trunslate}</p></div> 
       <button className='card-btn' onClick={handleChange}>{pressed ? props.trunslate: "Trunslate"}</button>
    </div>
)
}

export default Card;