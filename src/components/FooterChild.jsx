import logo from './../assets/images/logo-white.png';
import '../styles/Footer.css'

export default function FooterChild() {
    return (
        <div className="footer">
            <img src={logo} className="footer-logo" alt="logo" />
            <span className="footer-txt" >© 2020 Kasa. All rights reserved</span>
        </div>
    )
}