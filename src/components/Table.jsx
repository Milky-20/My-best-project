import React, {useState} from 'react';
import Edit from '../assets/pencil.png';
import '../style/table.scss'

function List(props){
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }

    return(

<div className='card__item'>
<span>{props.number}</span>
        {pressed ? (
            <>
<input className='card__input' value={props.name}></input>
<input className='card__input' value={props.transcription}></input>
<input className='card__input' value={props.trunslate}></input>
<div className='buttons'>
   <img src={Edit} className='table_btn' onClick={handleChange}></img>
<div className="cl-btn-7" onClick={handleChange}></div>
</div>

</>
        ) :
    (  
    <>
    <span>{props.name}</span>
    <span>[{props.transcription}]</span>
    <span>{props.trunslate}</span>
    <div className='buttons'> 
    <img src={Edit} className='table_btn' onClick={handleChange}></img>
    <div className="cl-btn-7" ></div>
    </div>
    </>
    )}
</div> )
}

export default List;