import { useState } from 'react'
import LocationMap from '../components/LocationMap'
import './Search.css'

const opportunities = [
  { id: 1, title: 'معلم لغة عربية', organization: 'مركز وادي عارة التعليمي', location: 'وادي عارة', category: 'التعليم' },
  { id: 2, title: 'مساعد اجتماعي', organization: 'جمعية وادي عارة الخيرية', location: 'وادي عارة', category: 'اجتماعي' },
  { id: 3, title: 'رفيق لكبار السن', organization: 'دار رعاية وادي عارة', location: 'وادي عارة', category: 'كبار السن' },
  { id: 4, title: 'تنظيف حي', organization: 'نظافة وادي عارة', location: 'وادي عارة', category: 'البيئة' },
  { id: 5, title: 'توزيع طرود غذائية', organization: 'مصرف وادي عارة', location: 'وادي عارة', category: 'الطعام والجوع' },
  { id: 6, title: 'معلم خصوصي', organization: 'مركز تفوق وادي عارة', location: 'وادي عارة', category: 'التعليم' },
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