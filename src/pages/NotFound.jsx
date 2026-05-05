import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">الصفحة غير موجودة</h2>
        <p className="not-found-text">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <Link to="/" className="not-found-btn">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  )
}

export default NotFound