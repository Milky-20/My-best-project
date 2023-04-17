import React, {useEffect, useState} from 'react';
import Edit from '../assets/pencil.png';
import '../style/table.scss'

function List(props){
    const [pressed, setPressed] = useState(false);
    const [inputText, setInputText] = useState(props);
    const [isEmpty, setIsEmpty] = useState(true);

    const handleChange = () => {
        setPressed(!pressed);
    }
    
    const onChange = (event) => {
        setInputText({
            ...inputText,
        [event.target.name]: event.target.value,
        });
    };

    useEffect(()=> {
        if(
            inputText.name === '' ||
            inputText.transcription === '' ||
            inputText.translate === ''
        ){
            setIsEmpty(true);
        } else{
            setIsEmpty(false);
        }
    }, [inputText]);

    const errorClass = (value) =>{
        return typeof value === 'string' && value.trim() ==='' ? 'error' : '';
    }

    function onSaveClick() {
        if (
        inputText.name === '' ||
        inputText.transcription === '' ||
        inputText.translate === '' 
        ) {
        alert('Error: Please fill in all the fields');
        } else {
        console.log('Form parameters:', inputText);
        setPressed(false); 
        }
    }

    return(

<div className='card__item' >
<span>{props.number}</span>

        {pressed ? (
            <>
<p className='card__input'><input value={inputText.name} 
className={`card-input ${errorClass(inputText.name)}`} onChange={onChange}></input></p>

<p className='card__input'><input value={inputText.transcription} 
className={`card-input ${errorClass(inputText.transcription)}`} onChange={onChange}></input></p>

<p className='card__input'><input value={inputText.trunslate} 
className={`card-input ${errorClass(inputText.translate)}`} onChange={onChange}></input></p>

<div className='buttons'>
<img src={Edit} className='table_btn' onClick={handleChange} ></img>

<button className={`cardSaveButton ${isEmpty ? 'disabled' : ''}`}
    onClick={onSaveClick}>Save</button>

<div className="cl-btn-7" onClick={handleChange}></div>
</div>
        
</>
        ) :
    (  
    <>
    <span>{props.name}</span>
    <span>[{props.transcription}]</span>
    <span>{props.translate}</span>
    <div className='buttons'> 
    <img src={Edit} className='table_btn' onClick={handleChange}></img>
    <div className="cl-btn-7" ></div>
    </div>
    </>
    )}
</div> )
}


export default List;