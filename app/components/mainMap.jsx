import React, { useState, useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function MainMap({items}) {
    const [position, setPosition] = useState({ lat: 51.2075, lon: 16.1616 });
    const [userPosition, setUserPosition] = useState(null);
    const mapRef = useRef();

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserPosition({ lat: latitude, lon: longitude });
                    mapRef.current.setView([latitude, longitude], 13);
                },
                (error) => {
                    console.error("Error getting geolocation: ", error);
                }
            );
        }
    }, []);

    return (
        <MapContainer
            center={[position.lat, position.lon]}
            zoom={13}
            scrollWheelZoom={false}
            style={{
                width: "100%",
                height: "100%",
                marginTop: "1.5rem",
                borderRadius: "1rem",
            }}
            ref={mapRef}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {userPosition ? (
                <Marker position={[userPosition.lat, userPosition.lon]}>
                    <Popup>
                        Twoja lokalizacja. <br /> Szerokość: {userPosition.lat}, Długość: {userPosition.lon}
                    </Popup>
                </Marker>
            ) : (
                <Marker position={[position.lat, position.lon]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            )}
            {items.map((item) => (
                <Marker key={item.id} position={[item.cinema_lat, item.cinema_lng]}>
                    <Popup>
                        {item.name}<br /> {item.location_address}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
