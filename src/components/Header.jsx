import '../style/header.css';

function Header (props) {
return(
    <div className='header'>
      <div className='header_too'>
  <span className='home allText'>Home</span>
  <span className='cardes allText'>Cards</span>
  <span className='favorites allText'>Favorites</span>
  <span className='contact allText'>Contact</span>
    </div>
    </div>
)
}

export default Header;