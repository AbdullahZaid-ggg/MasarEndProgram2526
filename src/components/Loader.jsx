import './Loader.css'

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
      </div>
      <p className="loader-text">جاري التحميل...</p>
    </div>
  )
}

export default Loader