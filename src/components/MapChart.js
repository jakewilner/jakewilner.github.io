import React from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import './MapChart.css'

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function MapChart() {
  return (
    <div className="map-container">
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography 
              key={geo.rsmKey} 
              geography={geo} 
              stroke="#FFF"
              fill="#DDD"
            />
          ))
        }
      </Geographies>
        <Marker key={'providence'} coordinates={[-71.40215, 41.82619]}>
          <circle r={5} fill="#6DAFFE" stroke="#fff" strokeWidth={2} />
        </Marker>
        <Marker key={'bloomfield'} coordinates={[-83.2151, 42.5467]}>
          <circle r={5} fill="#437FC7" stroke="#fff" strokeWidth={2} />
        </Marker>
    </ComposableMap>
    </div>
  )
}