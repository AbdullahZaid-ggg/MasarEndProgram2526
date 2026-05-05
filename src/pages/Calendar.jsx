import { useState } from 'react'
import './Calendar.css'

const events = [
  { id: 1, title: 'Berkute تعليمية', date: '2026-06-02', location: 'وادي عارة', type: 'education' },
  { id: 2, title: 'توزيع طرود', date: '2026-06-05', location: 'وادي عارة', type: 'social' },
  { id: 3, title: 'زراعة أشجار', date: '2026-06-10', location: 'وادي عارة', type: 'environmental' },
  { id: 4, title: 'فحص صحي مجاني', date: '2026-06-15', location: 'وادي عارة', type: 'health' },
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