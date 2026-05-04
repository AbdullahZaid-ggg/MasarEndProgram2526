import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">مركز المتطوعين</Link>
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