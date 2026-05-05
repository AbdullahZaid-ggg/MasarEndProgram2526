import { useState } from 'react'
import './Calendar.css'

const events = [
  { id: 1, title: 'تنظيف الشاطئ', date: '2026-05-10', location: 'جدة', type: 'environmental' },
  { id: 2, title: 'توزيع الوجبات', date: '2026-05-12', location: 'الرياض', type: 'social' },
  { id: 3, title: 'زراعة الأشجار', date: '2026-05-15', location: 'الدمام', type: 'environmental' },
  { id: 4, title: 'تعليم الأطفال', date: '2026-05-18', location: 'جدة', type: 'education' },
  { id: 5, title: 'زيارة كبار السن', date: '2026-05-20', location: 'الرياض', type: 'social' },
  { id: 6, title: 'يوم الصحة', date: '2026-05-25', location: 'الدمام', type: 'health' },
]

const eventTypes = {
  environmental: { label: 'بيئي', color: '#2ecc71' },
  social: { label: 'اجتماعي', color: '#3498db' },
  education: { label: 'تعليمي', color: '#9b59b6' },
  health: { label: 'صحي', color: '#e74c3c' },
}

function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedType, setSelectedType] = useState('')

  const months = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ]

  const filteredEvents = events.filter(event => {
    const eventMonth = new Date(event.date).getMonth()
    return eventMonth === selectedMonth && (selectedType === '' || event.type === selectedType)
  })

  return (
    <div className="calendar-page">
      <h1>فعاليات التطوع</h1>
      <p className="subtitle">شارك في الفعاليات القادمة وكن جزءاً من التغيير</p>

      <div className="calendar-controls">
        <div className="month-selector">
          <button onClick={() => setSelectedMonth((prev) => (prev - 1 + 12) % 12)} className="nav-btn">‹</button>
          <span className="month-name">{months[selectedMonth]}</span>
          <button onClick={() => setSelectedMonth((prev) => (prev + 1) % 12)} className="nav-btn">›</button>
        </div>

        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="type-filter">
          <option value="">جميع الأنواع</option>
          <option value="environmental">بيئي</option>
          <option value="social">اجتماعي</option>
          <option value="education">تعليمي</option>
          <option value="health">صحي</option>
        </select>
      </div>

      <div className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-type" style={{ background: eventTypes[event.type].color }}>
                {eventTypes[event.type].label}
              </div>
              <h3>{event.title}</h3>
              <div className="event-details">
                <p>📅 {new Date(event.date).toLocaleDateString('ar-SA')}</p>
                <p>📍 {event.location}</p>
              </div>
              <button className="event-btn">شارك الآن</button>
            </div>
          ))
        ) : (
          <p className="no-events">لا توجد فعاليات في هذا الشهر</p>
        )}
      </div>
    </div>
  )
}

export default Calendar