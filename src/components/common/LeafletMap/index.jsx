import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function LefletMap() {
  return (
    <div id="mapid" className="leaflet-container">
      <MapContainer
        center={[49.32418387168952, -123.1143030015945]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[49.32418387168952, -123.1143030015945]} zoom={12}>
          <Popup>
            <h5>Dimond Dental Clinic</h5> <br /> 1478 Marine Dr, North
            Vancouver, BC <br />
            V7P 1T6
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LefletMap;
