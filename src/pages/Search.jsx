import { useState } from 'react'
import './Search.css'

const opportunities = [
  { id: 1, title: 'مساعد في مصرف الطعام', organization: 'مصرف الطعام المجتمعي', location: 'المركز', category: 'الطعام والجوع' },
  { id: 2, title: 'مدرس رياضيات', organization: 'مركز تعليم الشباب', location: 'الغربية', category: 'التعليم' },
  { id: 3, title: 'متطوع في ملجأ الحيوانات', organization: 'ملجأ الحيوانات السعيدة', location: 'الشرقية', category: 'الحيوانات' },
  { id: 4, title: 'رفيق لكبار السن', organization: 'دار رعاية كبار الأيام', location: 'الشمالية', category: 'كبار السن' },
  { id: 5, title: 'تنظيف بيئي', organization: 'مبادرة الأرض الخضراء', location: 'حديقة المدينة', category: 'البيئة' },
  { id: 6, title: 'مساعد في ملجأ المشردين', organization: 'ملجأ المأوى الآمن', location: 'المركز', category: 'السكن' },
]

function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')

  const filtered = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !category || opp.category === category
    return matchesSearch && matchesCategory
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
        </div>
      </div>
      <div className="opportunities-list">
        {filtered.length === 0 ? (
          <p className="no-results">لم يتم العثور على فرص</p>
        ) : (
          filtered.map(opp => (
            <div key={opp.id} className="opportunity-card">
              <h3>{opp.title}</h3>
              <p className="org">{opp.organization}</p>
              <p className="location">{opp.location}</p>
              <span className="category">{opp.category}</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Search