import React from "react";
import Edit from '../assets/plus.png';
import '../style/addWord.scss'

function AddWord () {
    return(
        <div className="AddWord">
            <p>Add new word</p>
            <input className="NewWord" placeholder="Word"></input>
            <input className="NewWord" placeholder="Transctiption"></input>
            <input className="NewWord" placeholder="Translation"></input>
            <div className='buttons'>
<img src={Edit} className='table_btn'></img>
<div className="cl-btn-7"></div>
</div>
        </div>
    )
}

export default AddWord;