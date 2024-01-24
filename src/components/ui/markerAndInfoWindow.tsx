import React from 'react';
import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';

export const MarkerWithInfowindow = ({
    lat,
    lng,
    name,
    city,
    address,
    tel,
    mail,
    code,
}: {
    lat: number;
    lng: number;
    name: string;
    city: string;
    address: string;
    tel: string;
    mail: string;
    code: string;
}) => {
    const [infowindowOpen, setInfowindowOpen] = React.useState(true);
    const [markerRef, marker] = useAdvancedMarkerRef();

    return (
        <>
            <AdvancedMarker
                ref={markerRef}
                onClick={() => setInfowindowOpen(true)}
                position={{ lat, lng }}
                title={'AdvancedMarker that opens an Infowindow when clicked.'}
            />
            {infowindowOpen && (
                <InfoWindow
                    anchor={marker}
                    maxWidth={200}
                    onCloseClick={() => setInfowindowOpen(false)}
                >
                    <p>
                        <span className='font-bold'>{name}</span> <br />
                        {address} <br />
                        {code} {city} <br />
                        <a href={'tel:' + tel}>{tel}</a> <br />{' '}
                        <a className='text-blue-500 hover:underline' href={'mailto:' + mail}>{mail}</a>
                    </p>
                </InfoWindow>
            )}
        </>
    );
};
