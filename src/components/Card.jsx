import '../style/card.css';

function Card (props) {
return(
    <div className='card'>
      <div className='card-name'><h2>{props.name}</h2></div>  
        <div className='card-transcription'><p>[{props.transcription}]</p></div>
       <div><p className='card-trunslate'>{props.trunslate}</p></div> 
    </div>
)
}

export default Card;