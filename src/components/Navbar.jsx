import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logoWithoutTxt.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="شعار تطوع65x" className="logo-img" />
          <span className="logo-text">تطوع65x</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">الرئيسية</Link></li>
        <li><Link to="/search">البحث</Link></li>
        <li><Link to="/about">من نحن</Link></li>
        <li><Link to="/contact">اتصل بنا</Link></li>
      </ul>
      <div className="nav-auth">
        <Link to="/login" className="btn-login">تسجيل الدخول</Link>
        <Link to="/signup" className="btn-signup">أنشئ حساب</Link>
      </div>
    </nav>
  )
}

export default Navbar