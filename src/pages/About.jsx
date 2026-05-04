import './About.css'

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>حول مركز المتطوعين</h1>
        <p>نربط المتطوعين بفرص إحداث فرق</p>
      </section>
      <section className="about-content">
        <div className="mission">
          <h2>مهمتنا</h2>
          <p>نؤمن أن لدى الجميع شيئاً لتقديمه. منصتنا تجعل من السهل على الناس العثور على فرص تطوع ذات معنى في مجتمعهم وإحداث تغيير دائم.</p>
        </div>
        <div className="values">
          <h2>قيمنا</h2>
          <ul>
            <li>المجتمع أولاً - نبني مجتمعات أقوى معاً</li>
            <li>إمكانية الوصول - نجعل التطوع سهلاً للجميع</li>
            <li>الأثر - نركز على تغيير حقيقي وقابل للقياس</li>
            <li>الشفافية - تواصل مفتوح وصادق</li>
          </ul>
        </div>
        <div className="team">
          <h2>فريقنا</h2>
          <p>نحن مجموعة من المحترفين الملتزمين شغوفين بخدمة المجتمع. يعمل فريقنا بلاكلل لربط المتطوعين بالمنظمات التي تحتاج مساعدتهم.</p>
        </div>
      </section>
    </div>
  )
}

export default About