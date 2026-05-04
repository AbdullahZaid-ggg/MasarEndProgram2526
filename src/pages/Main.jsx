import { Link } from 'react-router-dom'
import './Main.css'

function Main() {
  return (
    <div className="main-page">
      <section className="hero">
        <div className="hero-content">
          <h1>اصنع فرقاً في مجتمعك</h1>
          <p>تواصل مع فرص التطوع ذات المعنى وساعد المحتاجين</p>
          <Link to="/search" className="cta-button">ابحث عن الفرص</Link>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h3>ابحث عن متطوعين</h3>
          <p>تصفح مئات من فرص التطوع في منطقتك</p>
        </div>
        <div className="feature">
          <h3>تواصل</h3>
          <p>انضم إلى مجتمع صناع التغيير</p>
        </div>
        <div className="feature">
          <h3>الأثر</h3>
          <p>تتبع مساهماتك وحدث تغييراً دائماً</p>
        </div>
      </section>
    </div>
  )
}

export default Main