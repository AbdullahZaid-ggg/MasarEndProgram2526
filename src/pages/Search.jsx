import { useState } from 'react'
import LocationMap from '../components/LocationMap'
import './Search.css'

const opportunities = [
  { id: 1, title: 'وحدة التطوع البلدية - تنسيق شامل', organization: 'بلدية ام الفحم', location: 'ام الفحم', category: 'مجتمع' },
  { id: 2, title: 'المركز الجماهيري', organization: 'مجلس ام الفحم', location: 'ام الفحم', category: 'شباب' },
  { id: 3, title: 'جمعية بصائر الخير', organization: 'بصائر الخير', location: 'ام الفحم', category: 'اغاثة' },
  { id: 4, title: 'وحدة الرفاه الاجتماعي', organization: 'رفاه ام الفحم', location: 'ام الفحم', category: 'رفاه' },
  { id: 5, title: 'أكاديمية نور البيان', organization: 'نور البيان', location: 'ام الفحم', category: 'تعليم' },
  { id: 6, title: 'برنامج وهدرت', organization: 'وهدرت', location: 'باقة الغربية', category: 'مسنين' },
  { id: 7, title: 'مركز المسنين باقة', organization: 'باقة الغربية', location: 'باقة الغربية', category: 'مسنين' },
  { id: 8, title: 'نادي المسنين', organization: 'نادي المسنين', location: 'باقة الغربية', category: 'مسنين' },
  { id: 9, title: 'سلطة الطبيعة والحدائق', organization: 'الطبيعة والحدائق', location: 'باقة الغربية', category: 'بيئة' },
  { id: 10, title: 'وحدة التطوع - عرعرة', organization: 'مجلس عرعرة', location: 'عرعرة', category: 'مجتمع' },
  { id: 11, title: 'المركز الجماهيري - عرعرة', organization: 'مجلس عرعرة', location: 'عرعرة', category: 'مجتمع' },
  { id: 12, title: 'برنامج طليعة', organization: 'طليعة', location: 'عرعرة', category: 'شباب' },
  { id: 13, title: 'مركز حركة أجيال', organization: 'أجيال', location: 'عرعرة', category: 'شباب' },
  { id: 14, title: 'قسم الرفاه الاجتماعي - عرعرة', organization: 'رفاه عرعرة', location: 'عرعرة', category: 'رفاه' },
  { id: 15, title: 'وحدة التطوع - كفرقرع', organization: 'مجلس كفرقرع', location: 'كفرقرع', category: 'مجتمع' },
  { id: 16, title: 'جمعية المرام للعلوم', organization: 'المرام', location: 'كفرقرع', category: 'تعليم' },
  { id: 17, title: 'مركز المرام العلمي', organization: 'المرام', location: 'كفرقرع', category: 'تعليم' },
  { id: 18, title: 'قسم الرفاه - كفر قرع', organization: 'رفاه كفرقرع', location: 'كفرقرع', category: 'رفاه' },
  { id: 19, title: 'برنامج طيور العطاء', organization: 'طيور العطاء', location: 'كفرقرع', category: 'تعليم' },
  { id: 20, title: 'وحدة التطوع - برطعة', organization: 'مجلس برطعة', location: 'برطعة', category: 'مجتمع' },
  { id: 21, title: 'مكتب الرفاه - معاوية', organization: 'رفاه معاوية', location: 'معاوية', category: 'رفاه' },
  { id: 22, title: 'مكتب الرفاه - عين السهلة', organization: 'رفاه عين السهلة', location: 'عين السهلة', category: 'رفاه' },
  { id: 23, title: 'المركز الجماهيري - مصمص', organization: 'مجلس مصمص', location: 'مصمص', category: 'مجتمع' },
  { id: 24, title: 'قسم الشبيبة - زلفة', organization: 'شبيبة زلفة', location: 'زلفة', category: 'شباب' },
  { id: 25, title: 'مؤسسة روح طوبة', organization: 'روح طوبة', location: 'وادي عارة', category: 'مجتمع' },
  { id: 26, title: 'منظمة إنوش', organization: 'إنوش', location: 'وادي عارة', category: 'صحة' },
  { id: 27, title: 'منظمة يديديم', organization: 'يديديم', location: 'وادي عارة', category: 'شباب' },
  { id: 28, title: 'عازر متسيون', organization: 'عازر متسيون', location: 'وادي عارة', category: 'صحة' },
  { id: 29, title: 'وحدة التطوع البلدية', organization: 'بلدية جولس', location: 'جولس', category: 'مجتمع' },
  { id: 30, title: 'مجلس بسمة المحلي', organization: 'بسمة', location: 'برطعة', category: 'مجتمع' },
  { id: 31, title: 'نوادي موفيت', organization: 'موفيت', location: 'باقة الغربية', category: 'مسنين' },
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
            placeholder="ابحث عن المركز أو المنظمة..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">كل الفئات</option>
            <option value="مجتمع">مجتمع</option>
            <option value="شباب">شباب</option>
            <option value="اغاثة">اغاثة</option>
            <option value="رفاه">رفاه</option>
            <option value="تعليم">تعليم</option>
            <option value="مسنين">مسنين</option>
            <option value="بيئة">بيئة</option>
            <option value="صحة">صحة</option>
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
        <span> ({filtered.length} مركز)</span>
      </div>

      <div className="opportunities-list">
        {filtered.length === 0 ? (
          <p className="no-results">لم يتم العثور على مراكز</p>
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