import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">الاسم</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
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
            <label htmlFor="message">الرسالة</label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
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