import { useState } from 'react'
import LocationMap from '../components/LocationMap'
import './Search.css'

const opportunities = [
  { id: 1, title: 'مساعد في مصرف الطعام', organization: 'مصرف الطعام المجتمعي', location: 'رياض', category: 'الطعام والجوع' },
  { id: 2, title: 'مدرس رياضيات', organization: 'مركز تعليم الشباب', location: 'جدة', category: 'التعليم' },
  { id: 3, title: 'متطوع في ملجأ الحيوانات', organization: 'ملجأ الحيوانات السعيدة', location: 'الدمام', category: 'الحيوانات' },
  { id: 4, title: 'رفيق لكبار السن', organization: 'دار رعاية كبار الأيام', location: 'رياض', category: 'كبار السن' },
  { id: 5, title: 'تنظيف بيئي', organization: 'مبادرة الأرض الخضراء', location: 'جدة', category: 'البيئة' },
  { id: 6, title: 'مساعد في ملجأ المشردين', organization: 'ملجأ المأوى الآمن', location: 'الدمام', category: 'السكن' },
  { id: 7, title: 'توزيع وجبات', organization: 'مطبخ الرحمة', location: 'مكة', category: 'الطعام والجوع' },
  { id: 8, title: 'معلم لغة عربية', organization: 'مركز تعليم النجاح', location: 'المدينة', category: 'التعليم' },
  { id: 9, title: 'معلم لغة عربية', organization: 'مركز وادي عارة التعليمي', location: 'وادي عارة', category: 'التعليم' },
  { id: 10, title: 'مساعد социальي', organization: 'جمعية وادي عارة الخيرية', location: 'وادي عارة', category: 'اجتماعي' },
  { id: 11, title: 'رفيق لكبار السن', organization: 'دار رعاية وادي عارة', location: 'وادي عارة', category: 'كبار السن' },
  { id: 12, title: 'تنظيف حي', organization: 'نظافة وادي عارة', location: 'وادي عارة', category: 'البيئة' },
  { id: 13, title: 'توزيع طرود غذائية', organization: 'مصرف وادي عارة', location: 'وادي عارة', category: 'الطعام والجوع' },
  { id: 14, title: 'معلم خصوصي', organization: 'مركز تفوق وادي عارة', location: 'وادي عارة', category: 'التعليم' },
]

function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')
  const [mapLocation, setMapLocation] = useState('')
  const [showMap, setShowMap] = useState(false)

  const handleLocationSelect = (location) => {
    setMapLocation(location)
  }

  const filtered = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !category || opp.category === category
    const matchesLocation = !mapLocation || opp.location === mapLocation
    return matchesSearch && matchesCategory && matchesLocation
  })

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>ابحث عن فرص التطوع</h1>
        <div className="search-filters">
          <input
            type="text"
            placeholder="ابحث بالعنوان أو المنظمة..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">كل الفئات</option>
            <option value="الطعام والجوع">الطعام والجوع</option>
            <option value="التعليم">التعليم</option>
            <option value="الحيوانات">الحيوانات</option>
            <option value="كبار السن">كبار السن</option>
            <option value="البيئة">البيئة</option>
            <option value="السكن">السكن</option>
          </select>
          <button 
            className="map-toggle-btn"
            onClick={() => setShowMap(!showMap)}
          >
            {showMap ? 'إخفاء الخريطة' : '🔍 بحث على الخريطة'}
          </button>
        </div>
      </div>

      {showMap && (
        <div className="map-container">
          <LocationMap onLocationSelect={handleLocationSelect} />
          {mapLocation && (
            <button 
              className="clear-location"
              onClick={() => setMapLocation('')}
            >
              مسح الموقع
            </button>
          )}
        </div>
      )}

      <div className="results-info">
        {mapLocation && <span>📍 الموقع: {mapLocation}</span>}
        <span> ({filtered.length} نتيجة)</span>
      </div>

      <div className="opportunities-list">
        {filtered.length === 0 ? (
          <p className="no-results">لم يتم العثور على فرص</p>
        ) : (
          filtered.map(opp => (
            <div key={opp.id} className="opportunity-card">
              <h3>{opp.title}</h3>
              <p className="org">{opp.organization}</p>
              <p className="location">📍 {opp.location}</p>
              <span className="category">{opp.category}</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Search