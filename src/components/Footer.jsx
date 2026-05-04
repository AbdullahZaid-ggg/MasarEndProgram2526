import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>تطوع65x</h3>
          <p>منصة تطوعية تهدف لربط المتطوعين بالمشاريع الخيرية</p>
        </div>
        <div className="footer-section">
          <h4>روابط سريعة</h4>
          <ul>
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/search">البحث</Link></li>
            <li><Link to="/about">من نحن</Link></li>
            <li><Link to="/contact">اتصل بنا</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>تواصل معنا</h4>
          <p>البريد الإلكتروني: info@volunteer.com</p>
          <p>الهاتف: 966-XXX-XXXX</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة © 2026</p>
      </div>
    </footer>
  )
}

export default Footer