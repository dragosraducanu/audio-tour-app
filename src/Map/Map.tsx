import React, { useState, Component, ReactElement, ReactNode, useRef, useEffect } from "react";

// url="https://storage.googleapis.com/tour-guide-tours/samples/Sample-Tour-1.kmz"/>
// googleMapsApiKey: "AIzaSyAMv1q_ty5fQGylBpv9e9-saxRKMbVZf7w"

export default function Map({center, zoom, children}: {center: google.maps.LatLng, zoom: number, children: ReactNode}) {
    const ref = useRef<HTMLDivElement>();
    const style = { height: "100vh" };

    const [map, setMap] = useState<google.maps.Map | null>(null);
   

    useEffect(() => {
        setMap(new window.google.maps.Map(ref.current!, {}));
      }, []);

      if(map) {
        map.setCenter(center);
        map.setZoom(zoom);
      }

    return <div ref={ref} id="map" style={style}>
        { React.Children.map(children, (child: ReactElement) => React.cloneElement(child, {map})) }
        </div>;
}