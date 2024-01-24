'use client';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png';
import '../../node_modules/leaflet/dist/leaflet.css';

const LeafLetMap = ({ coord, name, address, code, city, tel, mail  }: { coord: LatLngExpression, name: string, address: string, code: string, city: string, tel: string, mail: string }) => {
    const [isWindow, setIsWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsWindow(true);
        }
    }, []);
    return (
        isWindow && (
            <MapContainer
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'relative',
                    margin: '0 auto',
                }}
                center={coord}
                zoom={16}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />

                <Marker
                    icon={
                        new L.Icon({
                            iconUrl: MarkerIcon.src,
                            iconRetinaUrl: MarkerIcon.src,
                            iconSize: [25, 41],
                            iconAnchor: [12.5, 41],
                            popupAnchor: [0, -41],
                            shadowUrl: MarkerShadow.src,
                            shadowSize: [41, 41],
                        })
                    }
                    position={coord}
                >
                    <Popup>
                        <p>
                            {name} <br />
                            {address} <br />
                            {code} {city} <br />
                            <a href={`tel:${tel}`}>{tel}</a>
                            <a href={`mailto:${mail}`}>{mail}</a>
                        </p>
                    </Popup>
                </Marker>
            </MapContainer>
        )
    );
};

export default LeafLetMap;
