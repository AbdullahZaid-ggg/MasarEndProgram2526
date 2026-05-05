import { useState } from 'react'
import LocationMap from '../components/LocationMap'
import './Search.css'

const opportunities = [
  { id: 1, title: 'وحدة التطوع البلدية - تنسيق شامل', organization: 'بلدية ام الفحم', location: 'ام الفحم', category: 'مجتمع', admin: 'أحمد محمد', phone: '050-9072773', email: '', mapLink: 'https://maps.google.com/?q=32.5083,35.1547' },
  { id: 2, title: 'المركز الجماهيري', organization: 'مجلس ام الفحم', location: 'ام الفحم', category: 'شباب', admin: 'خالد سليم', phone: '04-8591600', email: '', mapLink: 'https://maps.google.com/?q=32.5083,35.1547' },
  { id: 3, title: 'جمعية بصائر الخير', organization: 'بصائر الخير', location: 'ام الفحم', category: 'اغاثة', admin: 'صلاح الدين', phone: '050-3209055', email: 'basair@org.com', mapLink: 'https://maps.google.com/?q=32.5083,35.1547' },
  { id: 4, title: 'وحدة الرفاه الاجتماعي', organization: 'رفاه ام الفحم', location: 'ام الفحم', category: 'رفاه', admin: 'منى علي', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.5083,35.1547' },
  { id: 5, title: 'أكاديمية نور البيان', organization: 'نور البيان', location: 'ام الفحم', category: 'تعليم', admin: 'ياسر الشيخ', phone: '04-8591600', email: 'nur@edu.org', mapLink: 'https://maps.google.com/?q=32.5083,35.1547' },
  { id: 6, title: 'مركز الطوارئ والاسعاف', organization: 'نجمة داود الحمراء', location: 'ام الفحم', category: 'صحة', admin: 'إسراء عبادي', phone: '04-8591000', email: 'mda@mda.org', mapLink: 'https://maps.google.com/?q=32.5083,35.1547' },
  { id: 7, title: 'مركز التدريب المهني', organization: 'معهد الحنون', location: 'ام الفحم', category: 'تعليم', admin: 'عمر غنايم', phone: '04-8592000', email: 'hon@edu.org', mapLink: 'https://maps.google.com/?q=32.5083,35.1547' },
  { id: 8, title: 'مركز حماية الطفل', organization: 'محمية الطفل', location: 'ام الفحم', category: 'اجتماعي', admin: 'هدى أبو جودة', phone: '050-1111111', email: 'child@protect.org', mapLink: 'https://maps.google.com/?q=32.5083,35.1547' },
  { id: 9, title: 'برنامج وهدرت', organization: 'وهدرت', location: 'باقة الغربية', category: 'مسنين', admin: 'رانيا قاسم', phone: '08-6699254', email: '', mapLink: 'https://maps.google.com/?q=32.4282,34.9406' },
  { id: 10, title: 'مركز المسنين باقة', organization: 'باقة الغربية', location: 'باقة الغربية', category: 'مسنين', admin: 'سعادتي', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.4282,34.9406' },
  { id: 11, title: 'نادي المسنين', organization: 'نادي المسنين', location: 'باقة الغربية', category: 'مسنين', admin: 'مريم موسى', phone: '04-6286500', email: '', mapLink: 'https://maps.google.com/?q=32.4282,34.9406' },
  { id: 12, title: 'سلطة الطبيعة والحدائق', organization: 'الطبيعة والحدائق', location: 'باقة الغربية', category: 'بيئة', admin: 'ريان يونس', phone: '08-6699254', email: 'nature@parks.gov', mapLink: 'https://maps.google.com/?q=32.4282,34.9406' },
  { id: 13, title: 'مركز الأطفال ذوي الاحتياجات', organization: 'الامل للتأهيل', location: 'باقة الغربية', category: 'اجتماعي', admin: 'لمى جباعي', phone: '04-6288000', email: 'hope@rehab.org', mapLink: 'https://maps.google.com/?q=32.4282,34.9406' },
  { id: 14, title: 'وحدة التطوع - عرعرة', organization: 'مجلس عرعرة', location: 'عرعرة', category: 'مجتمع', admin: 'ولاء重度', phone: '050-9777260', email: 'voluntary.walaa.m@gmail.com', mapLink: 'https://maps.google.com/?q=32.4833,35.0500' },
  { id: 15, title: 'المركز الجماهيري - عرعرة', organization: 'مجلس عرعرة', location: 'عرعرة', category: 'مجتمع', admin: 'باسل حاج يحيى', phone: '052-4284233', email: '', mapLink: 'https://maps.google.com/?q=32.4833,35.0500' },
  { id: 16, title: 'برنامج طليعة', organization: 'طليعة', location: 'عرعرة', category: 'شباب', admin: 'حسين جبارين', phone: '050-8170004', email: '', mapLink: 'https://maps.google.com/?q=32.4833,35.0500' },
  { id: 17, title: 'مركز حركة أجيال', organization: 'أجيال', location: 'عرعرة', category: 'شباب', admin: 'أحمدlements', phone: '050-9020433', email: 'aaiak@arara-ara.muni.il', mapLink: 'https://maps.google.com/?q=32.4833,35.0500' },
  { id: 18, title: 'مكتبة عامة عرعرة', organization: 'مكتبة عرعرة', location: 'عرعرة', category: 'تعليم', admin: 'منار重度', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.4833,35.0500' },
  { id: 19, title: 'نادي رياضي عرعرة', organization: 'نادي عرعرة الرياضي', location: 'عرعرة', category: 'شباب', admin: 'وسام重度', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.4833,35.0500' },
  { id: 20, title: 'مركز تعليم الحاسوب', organization: 'Digital Wadi Ara', location: 'عرعرة', category: 'تعليم', admin: 'تسنيم重度', phone: '050-0000000', email: 'digital@wadiara.org', mapLink: 'https://maps.google.com/?q=32.4833,35.0500' },
  { id: 21, title: 'وحدة التطوع - كفرقرع', organization: 'مجلس كفرقرع', location: 'كفرقرع', category: 'مجتمع', admin: 'مازن重度', phone: '04-6358111', email: '', mapLink: 'https://maps.google.com/?q=32.1123,34.9741' },
  { id: 22, title: 'جمعية المرام للعلوم', organization: 'المرام', location: 'كفرقرع', category: 'تعليم', admin: 'د. محمد重度', phone: '', email: 'contact@al-maram.org', mapLink: 'https://maps.google.com/?q=32.1123,34.9741' },
  { id: 23, title: 'مركز المرام العلمي', organization: 'المرام', location: 'كفرقرع', category: 'تعليم', admin: 'د. محمد重度', phone: '', email: 'contact@al-maram.org', mapLink: 'https://maps.google.com/?q=32.1123,34.9741' },
  { id: 24, title: 'مركز صحة المرأة', organization: 'مبادرة أمان', location: 'كفرقرع', category: 'صحة', admin: 'د. ريم重度', phone: '', email: 'aman@health.org', mapLink: 'https://maps.google.com/?q=32.1123,34.9741' },
  { id: 25, title: 'مركز علاج طبيعي', organization: 'العيادة الشعبية', location: 'كفرقرع', category: 'صحة', admin: 'معاذ重度', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.1123,34.9741' },
  { id: 26, title: 'وحدة التطوع - برطعة', organization: 'مجلس برطعة', location: 'برطعة', category: 'مجتمع', admin: 'سارة重度', phone: '04-6257692', email: '', mapLink: 'https://maps.google.com/?q=32.4476,35.0536' },
  { id: 27, title: 'مخزن الطعام المجاني', organization: 'بنك الطعام', location: 'برطعة', category: 'اغاثة', admin: 'كريم重度', phone: '', email: 'foodbank@org.org', mapLink: 'https://maps.google.com/?q=32.4476,35.0536' },
  { id: 28, title: 'مؤسسة روح طوبة', organization: 'روح طوبة', location: 'وادي عارة', category: 'مجتمع', admin: 'سارة重度', phone: '03-5436868', email: 'sarah@ruachtova.org.il', mapLink: 'https://maps.google.com/?q=32.4833,35.0500' },
  { id: 29, title: 'منظمة إنوش', organization: 'إنوش', location: 'وادي عارة', category: 'صحة', admin: 'يارا重度', phone: '052-6166610', email: 'yaara.s@enosh.org.il', mapLink: 'https://maps.google.com/?q=32.4833,35.0500' },
  { id: 30, title: 'منظمة يديديم', organization: 'يديديم', location: 'وادي عارة', category: 'شباب', admin: 'Impact Team', phone: '02-6550220', email: 'impact@yedidim.org.il', mapLink: 'https://maps.google.com/?q=32.4833,35.0500' },
  { id: 31, title: 'عازر متسيون', organization: 'عازر متسيون', location: 'وادي عارة', category: 'صحة', admin: 'Volunteer Team', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.4833,35.0500' },
  { id: 32, title: 'جمعية الإغاثة الطبية', organization: 'الهلال الأحمر', location: 'وادي عارة', category: 'صحة', admin: 'فريق الإنقاذ', phone: '', email: 'redcrescent@org.org', mapLink: 'https://maps.google.com/?q=32.4833,35.0500' },
  { id: 33, title: 'وحدة التطوع البلدية', organization: 'بلدية جولس', location: 'جولس', category: 'مجتمع', admin: 'بلدية جولس', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.5123,35.0833' },
  { id: 34, title: 'مجلس بسمة المحلي', organization: 'بسمة', location: 'برطعة', category: 'مجتمع', admin: 'سارة重度', phone: '04-6257692', email: '', mapLink: 'https://maps.google.com/?q=32.4476,35.0536' },
  { id: 35, title: 'نوادي موفيت', organization: 'موفيت', location: 'باقة الغربية', category: 'مسنين', admin: 'مركز المسنين', phone: '04-6286500', email: '', mapLink: 'https://maps.google.com/?q=32.4282,34.9406' },
  { id: 36, title: 'مكتب الرفاه - معاوية', organization: 'رفاه معاوية', location: 'معاوية', category: 'رفاه', admin: 'مكتب الرفاه', phone: '04-6361703', email: '', mapLink: 'https://maps.google.com/?q=32.3500,35.0167' },
  { id: 37, title: 'مكتب الرفاه - عين السهلة', organization: 'رفاه عين السهلة', location: 'عين السهلة', category: 'رفاه', admin: 'مكتب الرفاه', phone: '04-6257485', email: '', mapLink: 'https://maps.google.com/?q=32.3833,35.0333' },
  { id: 38, title: 'المركز الجماهيري - مصمص', organization: 'مجلس مصمص', location: 'مصمص', category: 'مجتمع', admin: 'لجنة المتطوعين', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.4500,35.1000' },
  { id: 39, title: 'قسم الشبيبة - زلفة', organization: 'شبيبة زلفة', location: 'زلفة', category: 'شباب', admin: 'قسم الشبيبة', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.5500,35.1833' },
  { id: 40, title: 'مركز دعم الأسرة', organization: 'بيت العائلة', location: 'معاوية', category: 'اجتماعي', admin: 'نورة重度', phone: '', email: 'family@support.org', mapLink: 'https://maps.google.com/?q=32.3500,35.0167' },
  { id: 41, title: 'وحدة التطوع - سالم', organization: 'مجلس سالم المحلي', location: 'سالم', category: 'مجتمع', admin: 'مجلس سالم', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.3167,34.9500' },
  { id: 42, title: 'وحدة التطوع - رمانة', organization: 'مجلس رمانة', location: 'رمانة', category: 'مجتمع', admin: 'مجلس رمانة', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.3667,35.0167' },
  { id: 43, title: 'مركز ج人流', organization: 'ج人流 الثقافي', location: 'جيت', category: 'تعليم', admin: 'ج人流', phone: '', email: 'jiron@jiron.org', mapLink: 'https://maps.google.com/?q=32.5833,35.1333' },
  { id: 44, title: 'مركز المسنين عركز', organization: 'دار رعاية عركز', location: 'عركز', category: 'مسنين', admin: 'دار الرعاية', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.6167,35.0833' },
  { id: 45, title: 'وحدة التطوع - الفريديس', organization: 'مجلس الفريديس', location: 'الفريديس', category: 'مجتمع', admin: 'مجلس الفريديس', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.4333,34.9167' },
  { id: 46, title: 'قسم الرفاه الاجتماعي - عرعرة', organization: 'رفاه عرعرة', location: 'عرعرة', category: 'رفاه', admin: 'كريمة ملحم', phone: '077-3624312', email: 'krimam@arara-ara.muni.il', mapLink: 'https://maps.google.com/?q=32.4833,35.0500' },
  { id: 47, title: 'قسم الرفاه - كفر قرع', organization: 'رفاه كفرقرع', location: 'كفرقرع', category: 'رفاه', admin: 'موظف الرفاه', phone: '04-6358111', email: '', mapLink: 'https://maps.google.com/?q=32.1123,34.9741' },
  { id: 48, title: 'برنامج طيور العطاء', organization: 'طيور العطاء', location: 'كفرقرع', category: 'تعليم', admin: 'برنامج طيور', phone: '', email: '', mapLink: 'https://maps.google.com/?q=32.1123,34.9741' },
]

function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')
  const [city, setCity] = useState('')
  const [mapLocation, setMapLocation] = useState('')
  const [showMap, setShowMap] = useState(false)
  const [selectedCenter, setSelectedCenter] = useState(null)

  const cities = [...new Set(opportunities.map(opp => opp.location))].sort()

  const handleLocationSelect = (location, centerData = null) => {
    setMapLocation(location)
    if (centerData) setSelectedCenter(centerData)
  }

  const filtered = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !category || opp.category === category
    const matchesCity = !city || opp.location === city
    const matchesLocation = !mapLocation || opp.location === mapLocation
    return matchesSearch && matchesCategory && matchesCity && matchesLocation
  })

  const handleCardClick = (opp) => {
    setSelectedCenter(opp)
  }

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
            <option value="اجتماعي">اجتماعي</option>
          </select>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">كل المدن</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
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
          <LocationMap onLocationSelect={handleLocationSelect} opportunities={opportunities} />
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
            <div key={opp.id} className="opportunity-card" onClick={() => handleCardClick(opp)}>
              <h3>{opp.title}</h3>
              <p className="org">{opp.organization}</p>
              <p className="location">📍 {opp.location}</p>
              <span className="category">{opp.category}</span>
            </div>
          ))
        )}
      </div>

      {selectedCenter && (
        <div className="center-details-modal" onClick={() => setSelectedCenter(null)}>
          <div className="center-details-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCenter(null)}>×</button>
            <h2>{selectedCenter.title}</h2>
            <p className="org-name">{selectedCenter.organization}</p>
            
            <div className="detail-row">
              <span className="label">📍 الموقع:</span>
              <span className="value">{selectedCenter.location}</span>
            </div>
            
            <div className="detail-row">
              <span className="label">📋 الفئة:</span>
              <span className="value">{selectedCenter.category}</span>
            </div>
            
            <div className="detail-row">
              <span className="label">👤 المسؤول:</span>
              <span className="value">{selectedCenter.admin || 'غير محدد'}</span>
            </div>
            
            <div className="detail-row">
              <span className="label">📞 الهاتف:</span>
              <span className="value">{selectedCenter.phone || 'غير متوفر'}</span>
            </div>
            
            <div className="detail-row">
              <span className="label">📧 البريد:</span>
              <span className="value">{selectedCenter.email || 'غير متوفر'}</span>
            </div>
            
            <a 
              href={selectedCenter.mapLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-link-btn"
            >
              📍 فتح في Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search