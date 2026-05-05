import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب'
    } else if (formData.name.length < 3) {
      newErrors.name = 'الاسم يجب أن يكون 3 أحرف على الأقل'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صالح'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'الرسالة مطلوبة'
    } else if (formData.message.length < 10) {
      newErrors.message = 'الرسالة يجب أن تكون 10 أحرف على الأقل'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }
  }

  return (
    <div className="contact-page">
      <h1>اتصل بنا</h1>
      <p className="subtitle">لديك أسئلة؟ نود أن نسمع منك!</p>
      
      {submitted ? (
        <div className="success-message">
          <h3>شكراً لك!</h3>
          <p>لقد استلمنا رسالتك وسنتواصل معك قريباً.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">الاسم</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">الرسالة</label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={errors.message ? 'error' : ''}
            />
            {errors.message && <span className="error-msg">{errors.message}</span>}
          </div>
          <button type="submit" className="submit-btn">أرسل الرسالة</button>
        </form>
      )}
      
      <div className="contact-info">
        <h3>طرق أخرى للتواصل</h3>
        <p>البريد الإلكتروني: info@volunteerhub.com</p>
        <p>الهاتف: (555) 123-4567</p>
        <p>العنوان: 123 شارع الرئيسي، المدينة، الولاية 12345</p>
      </div>
    </div>
  )
}

export default Contact