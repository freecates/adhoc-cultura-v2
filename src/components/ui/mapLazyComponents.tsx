'use client';
import {
    MapContainer as LMapContainer,
  } from 'react-leaflet';
  
  export const MapContainer = ({ forwardedRef, ...props }: { forwardedRef: any } ) => (
    <LMapContainer {...props} ref={forwardedRef} />
  );