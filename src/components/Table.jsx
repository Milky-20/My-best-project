import React, {useState} from 'react';
import Edit from '../assets/edit.jpg'
import '../style/Table.css'

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
<input className='card__input'></input>
<input className='card__input'></input>
<input className='card__input'></input>
<div className="cl-btn-7" onClick={handleChange}></div>
</>
        ) :
    (  
    <>
    <span>{props.name}</span>
    <span>[{props.transcription}]</span>
    <span>{props.trunslate}</span>
    <div className="cl-btn-7" onClick={handleChange}></div>
    </>
    )}
</div> )
}

export default List;