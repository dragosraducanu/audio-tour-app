import React, { useState, useEffect } from "react";

export class MarkerData {
    id: string;
    name: string;
    description: string;
    latLng: google.maps.LatLng
    infoWindowHtml: string;
  };

  
export default function KmlLayer({
    url,
    map,
    onClick
}: {
    url: string,
    map?: google.maps.Map,
    onClick: ((arg: MarkerData) => void)
}) {
    const [kmlLayer, setKmlLayer] = useState<google.maps.KmlLayer | null>(null);

    useEffect(() => {
        setKmlLayer(new google.maps.KmlLayer({}));
    }, []);

    if (kmlLayer) {
        kmlLayer.setMap(map);
        kmlLayer.setUrl(url);
        kmlLayer.setOptions({suppressInfoWindows: true});
        kmlLayer.addListener("click", (kmlEvent) => {
            
            onClick({
                id: kmlEvent.featureData.id,
                name: kmlEvent.featureData.name,
                description: kmlEvent.featureData.description,
                latLng: new google.maps.LatLng(kmlEvent.latLng.lat(), kmlEvent.latLng.lng()),
                infoWindowHtml: kmlEvent.featureData.infoWindowHtml
            } as MarkerData);
        });
    }
   
    return null;
}