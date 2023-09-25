import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Maps() {
    const [coordinates, setCoordinates] = useState({
        lat: '',
        lon: ''
    })

    const fetchCoordinates = async () => {
        try {
            const response = await fetch('https://nominatim.openstreetmap.org/search?q=india&format=json', {
                method: 'GET', // HTTP method
                headers: {
                    'Content-Type': 'application/json', // Request headers
                    // You can add more headers here
                },
                // body: JSON.stringify({ key: 'value' }), // Request body (for POST requests)
                mode: 'cors', // CORS mode
                cache: 'no-cache', // Cache mode
                credentials: 'same-origin', // Send cookies along with the request
                redirect: 'follow', // Redirect mode
                referrerPolicy: 'no-referrer', // Referrer policy
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData)
            setCoordinates({
                lat: responseData[0].lat,
                lon: responseData[0].lon
            });

            console.log(coordinates)
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        fetchCoordinates()
    }, [coordinates.lat, coordinates.lon])

    const position = [coordinates.lat, coordinates.lon]; // Latitude and Longitude
    return (
        <div className='w-full h-72 rounded-md md:h-full xl:h-48'>
            <MapContainer className='h-full w-full' center={position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://a.tile.openstreetmap.org/1/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        mysore
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Maps