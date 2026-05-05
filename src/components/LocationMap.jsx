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
  { id: 1, name: 'مركز وادي عارة التطوعي', lat: 32.4833, lng: 35.0500, type: 'وادي عارة' },
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
    if (center) map.flyTo([center.lat, center.lng], 10)
  }, [center, map])
  return null
}

function LocationMap({ onLocationSelect }) {
  const [selectedRegion, setSelectedRegion] = useState('')
  const [center, setCenter] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)

  const regionCoords = {
    'وادي عارة': { lat: 32.4833, lng: 35.0500 },
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
          <option value="وادي عارة">وادي عارة</option>
        </select>
      </div>
      
      <MapContainer 
        center={[24.7136, 46.6753]} 
        zoom={5} 
        style={{ height: '300px', width: '100%', borderRadius: '12px' }}
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
              <div style={{ textAlign: 'center' }}>
                <strong>{loc.name}</strong>
                <br />
                <span>{loc.type}</span>
                <br />
                <button 
                  onClick={() => handleMarkerClick(loc)}
                  style={{ marginTop: '5px', padding: '3px 10px', cursor: 'pointer' }}
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