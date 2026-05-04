import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', formData)
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>تسجيل الدخول</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">كلمة المرور</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="auth-btn">تسجيل الدخول</button>
        </form>
        <p className="auth-footer">
          ليس لديك حساب؟ <Link to="/signup">أنشئ حساب</Link>
        </p>
      </div>
    </div>
  )
}

export default Login