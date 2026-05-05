import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logoWithoutTxt.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  console.log('Device detected:', isMobile ? 'Mobile' : 'Desktop')

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="شعار" className="logo-img" />
          <span className="logo-text">تطوع65x</span>
        </Link>
      </div>

      {isMobile ? (
        <>
          <div className="nav-auth-mobile">
            <Link to="/login" className="btn-login btn-sm">دخول</Link>
            <Link to="/signup" className="btn-signup btn-sm">تسجيل</Link>
          </div>
          <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsOpen(false)}>الرئيسية</Link></li>
            <li><Link to="/search" onClick={() => setIsOpen(false)}>البحث</Link></li>
            <li><Link to="/calendar" onClick={() => setIsOpen(false)}>الفعاليات</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>من نحن</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>اتصل بنا</Link></li>
          </ul>
        </>
      ) : (
        <>
          <ul className="nav-links">
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/search">البحث</Link></li>
            <li><Link to="/calendar">الفعاليات</Link></li>
            <li><Link to="/about">من نحن</Link></li>
            <li><Link to="/contact">اتصل بنا</Link></li>
          </ul>
          <div className="nav-auth">
            <Link to="/login" className="btn-login">تسجيل الدخول</Link>
            <Link to="/signup" className="btn-signup">أنشئ حساب</Link>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar