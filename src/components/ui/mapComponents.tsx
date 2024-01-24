'use client';
import dynamic from 'next/dynamic';
import { forwardRef } from 'react';

export const LazyMapContainer = dynamic(
    () => import('@/components/ui/mapLazyComponents').then((m) => m.MapContainer),
    {
        ssr: false,
        loading: () => <div style={{ height: '400px' }} />,
    },
);

export const MapContainer = forwardRef((props, ref) => (
    <LazyMapContainer {...props} forwardedRef={ref} />
));
MapContainer.displayName = 'MapContainer';

export const TileLayer = dynamic(() => import('react-leaflet').then((m) => m.TileLayer), {
    ssr: false,
});

export const Popup = dynamic(() => import('react-leaflet').then((m) => m.Popup), { ssr: false });

export const Marker = dynamic(() => import('react-leaflet').then((m) => m.Marker), { ssr: false });
