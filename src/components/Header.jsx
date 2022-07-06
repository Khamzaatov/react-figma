import logo from '../images/Header_logo.png'

const Header = () => {
    return (
        <div className="header"> 
          <img className='logo' src={logo} alt="Лого"/>
          <div className='menu'>
          <div className='header-text'>
            <li>Главная</li>
            <li>О нас</li>
            <li>Контакты</li>
          </div>
          </div>
        </div>
    )
}

export default Header;
