import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logoWithoutTxt.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="شعار تطوع65x" className="logo-img" />
          <span className="logo-text">تطوع65x</span>
        </Link>
      </div>
      
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>الرئيسية</Link></li>
        <li><Link to="/search" onClick={() => setIsOpen(false)}>البحث</Link></li>
        <li><Link to="/calendar" onClick={() => setIsOpen(false)}>الفعاليات</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>من نحن</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>اتصل بنا</Link></li>
      </ul>

      <div className={`nav-auth ${isOpen ? 'active' : ''}`}>
        <Link to="/login" className="btn-login">تسجيل الدخول</Link>
        <Link to="/signup" className="btn-signup">أنشئ حساب</Link>
      </div>
    </nav>
  )
}

export default Navbar