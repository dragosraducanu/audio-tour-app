import React, { useState, useEffect } from "react";


export default function Marker({
    position, 
    map
}: {
    position: google.maps.LatLng,
    map?: google.maps.Map
}) {
    const [marker, setMarker] = useState<google.maps.Marker | null>(null);

    useEffect(() => {
        setMarker(new google.maps.Marker({}));
    }, []);

    if (marker) {
        marker.setMap(map);
        marker.setPosition(position);
    }
   
    return null;
}