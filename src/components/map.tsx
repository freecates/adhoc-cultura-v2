'use client';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { MarkerWithInfowindow } from './ui/markerAndInfoWindow';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

const GoogleMap = ({
    latLng,
    name,
    address,
    code,
    city,
    tel,
    mail,
    url,
}: {
    latLng: { lat: number; lng: number };
    name: string;
    address: string;
    code: string;
    city: string;
    tel: string;
    mail: string;
    url: string;
}) => {
    const { lat, lng } = latLng;
    return (
        <APIProvider apiKey={API_KEY}>
            <Map
                mapId={'bf51a910020fa25a'}
                zoom={16}
                center={{ lat, lng }}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >
                <MarkerWithInfowindow
                    lat={lat}
                    lng={lng}
                    name={name}
                    address={address}
                    code={code}
                    city={city}
                    tel={tel}
                    mail={mail}
                    url={url}
                />
            </Map>
        </APIProvider>
    );
};
export default GoogleMap;
