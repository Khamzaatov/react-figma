import footer_logo from '../images/Footer_logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="fooler-logo">
            <img src={footer_logo} alt="" />
        </div>
        <div className="footer-menu">
            <ul className='footer-ul'>
                <li>Партнерам</li>
                <li>Разработчикам</li>
                <li>Вакансии</li>
            </ul>
        </div>
        <div className="copyright">ООО "интукод", 2020г.</div>
    </div>
  )
}
export default Footer