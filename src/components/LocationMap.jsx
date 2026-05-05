import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const locations = [
  { id: 1, name: 'وحدة التطوع البلدية - ام الفحم', lat: 32.5083, lng: 35.1547, type: 'ام الفحم' },
  { id: 2, name: 'المركز الجماهيري - ام الفحم', lat: 32.5083, lng: 35.1547, type: 'ام الفحم' },
  { id: 3, name: 'جمعية بصائر الخير', lat: 32.5083, lng: 35.1547, type: 'ام الفحم' },
  { id: 4, name: 'أكاديمية نور البيان', lat: 32.5083, lng: 35.1547, type: 'ام الفحم' },
  { id: 5, name: 'برنامج وهدرت - باقة', lat: 32.4282, lng: 34.9406, type: 'باقة الغربية' },
  { id: 6, name: 'مركز المسنين باقة', lat: 32.4282, lng: 34.9406, type: 'باقة الغربية' },
  { id: 7, name: 'نادي المسنين', lat: 32.4282, lng: 34.9406, type: 'باقة الغربية' },
  { id: 8, name: 'سلطة الطبيعة والحدائق', lat: 32.4282, lng: 34.9406, type: 'باقة الغربية' },
  { id: 9, name: 'وحدة التطوع - عرعرة', lat: 32.4833, lng: 35.0500, type: 'عرعرة' },
  { id: 10, name: 'المركز الجماهيري - عرعرة', lat: 32.4833, lng: 35.0500, type: 'عرعرة' },
  { id: 11, name: 'برنامج طليعة', lat: 32.4833, lng: 35.0500, type: 'عرعرة' },
  { id: 12, name: 'مركز حركة أجيال', lat: 32.4833, lng: 35.0500, type: 'عرعرة' },
  { id: 13, name: 'وحدة التطوع - كفرقرع', lat: 32.1123, lng: 34.9741, type: 'كفرقرع' },
  { id: 14, name: 'جمعية المرام', lat: 32.1123, lng: 34.9741, type: 'كفرقرع' },
  { id: 15, name: 'وحدة التطوع - برطعة', lat: 32.4476, lng: 35.0536, type: 'برطعة' },
  { id: 16, name: 'مؤسسة روح طوبة', lat: 32.4833, lng: 35.0500, type: 'وادي عارة' },
  { id: 17, name: 'منظمة إنوش', lat: 32.4833, lng: 35.0500, type: 'وادي عارة' },
  { id: 18, name: 'منظمة يديديم', lat: 32.4833, lng: 35.0500, type: 'وادي عارة' },
  { id: 19, name: 'عازر متسيون', lat: 32.4833, lng: 35.0500, type: 'وادي عارة' },
  { id: 20, name: 'وحدة التطوع - جولس', lat: 32.5123, lng: 35.0833, type: 'جولس' },
]

function LocationMarker({ setSelectedLocation }) {
  useMapEvents({
    click(e) {
      setSelectedLocation({ lat: e.latlng.lat, lng: e.latlng.lng })
    },
  })
  return null
}

function MapController({ center }) {
  const map = useMap()
  useEffect(() => {
    if (center) map.flyTo([center.lat, center.lng], 12)
  }, [center, map])
  return null
}

function LocationMap({ onLocationSelect }) {
  const [selectedRegion, setSelectedRegion] = useState('')
  const [center, setCenter] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)

  const regionCoords = {
    'ام الفحم': { lat: 32.5083, lng: 35.1547 },
    'باقة الغربية': { lat: 32.4282, lng: 34.9406 },
    'عرعرة': { lat: 32.4833, lng: 35.0500 },
    'كفرقرع': { lat: 32.1123, lng: 34.9741 },
    'برطعة': { lat: 32.4476, lng: 35.0536 },
    'وادي عارة': { lat: 32.4833, lng: 35.0500 },
    'جولس': { lat: 32.5123, lng: 35.0833 },
    'معاوية': { lat: 32.3500, lng: 35.0167 },
    'عين السهلة': { lat: 32.3833, lng: 35.0333 },
    'مصمص': { lat: 32.4500, lng: 35.1000 },
    'زلفة': { lat: 32.5500, lng: 35.1833 },
  }

  const filteredLocations = selectedRegion 
    ? locations.filter(l => l.type === selectedRegion)
    : locations

  const handleRegionChange = (region) => {
    setSelectedRegion(region)
    if (region && regionCoords[region]) {
      setCenter(regionCoords[region])
    } else {
      setCenter(null)
    }
  }

  const handleMarkerClick = (loc) => {
    setSelectedLocation(loc)
    onLocationSelect(loc.type)
  }

  return (
    <div className="location-map">
      <div className="map-header">
        <h3>البحث على الخريطة</h3>
        <select 
          value={selectedRegion} 
          onChange={(e) => handleRegionChange(e.target.value)}
          className="region-select"
        >
          <option value="">كل المناطق</option>
          <option value="ام الفحم">ام الفحم</option>
          <option value="باقة الغربية">باقة الغربية</option>
          <option value="عرعرة">عرعرة</option>
          <option value="كفرقرع">كفرقرع</option>
          <option value="برطعة">برطعة</option>
          <option value="وادي عارة">وادي عارة</option>
          <option value="جولس">جولس</option>
        </select>
      </div>
      
      <MapContainer 
        center={[32.4833, 35.0500]} 
        zoom={11} 
        style={{ height: '400px', width: '100%', borderRadius: '12px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController center={center} />
        <LocationMarker setSelectedLocation={setSelectedLocation} />
        
        {filteredLocations.map(loc => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>
              <div style={{ textAlign: 'center', minWidth: '150px' }}>
                <strong>{loc.name}</strong>
                <br />
                <span>{loc.type}</span>
                <br />
                <button 
                  onClick={() => handleMarkerClick(loc)}
                  style={{ marginTop: '8px', padding: '4px 12px', cursor: 'pointer', background: '#1b7a43', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                  اختر
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedLocation && (
        <p className="selected-info">
          ✓ تم اختيار: {selectedLocation.name} ({selectedLocation.type})
        </p>
      )}
    </div>
  )
}

export default LocationMap