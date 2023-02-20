import '../style/main.css'

function Main(props){
    return(
<div className="list">
<div className="cards">
<h1 className="admin__title">Words</h1>
    {/* <form className="admin" onsubmit ="return false;">
    <input type="text" id="newNameСompany" placeholder="название" class="admin__input"/>
        <input type="text" id="newLogoСompany" placeholder="URL логотипа" class="admin__input"/>
        <input type="text" id="newPay" placeholder="стоимость" class="admin__input"/>
        <select name="currency" id="newCurrency" className="admin__select">
          <option value="ruble" class="admin__option">₽</option>
          <option value="dollar" class="admin__option">$</option>
        </select>
        <select name="type" class="admin__select" id="type">
          <option value="Russia" class="admin__option">Русская</option>
          <option value="other" class="admin__option">Иностранная</option>
        </select>
        <button class="admin__button">Добавить</button>
    </form> */}
    <div class="card__list">
        <div class="card__menu">
          <span class="card__text">№</span>
          <span class="card__text">Word</span>
          <span class="card__text">Transcription</span>
          <span class="card__text">Translation</span>
          <span class="card__text">Edit</span>
        </div>
        </div>
        
        <div className='card__item'>
        <span>{props.number}</span>
        <span>{props.name}</span>
        <span>[{props.transcription}]</span>
        <span>{props.trunslate}</span>
        <div className="cl-btn-7"></div>
        </div>
</div>
</div>
    )
}

// function List(props){
//   return(
// <div className='card__item'>
//         <span>{props.number}</span>
//         <span>{props.name}</span>
//         <span>[{props.transcription}]</span>
//         <span>{props.trunslate}</span>
//         <div className="cl-btn-7"></div>
//         </div>
//   )
// }

export default Main;
// export default List;