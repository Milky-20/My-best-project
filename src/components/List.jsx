import '../style/main.css'
import Edit from '../assets/edit.jpg'

function List(props){
    return(
        <div className='card__item'>
        <span>{props.number}</span>
        <span>{props.name}</span>
        <span>[{props.transcription}]</span>
        <span>{props.trunslate}</span>
       
        <div className="cl-btn-7"></div>
        </div>
    )
}

export default List;