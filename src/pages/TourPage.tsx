import React, { useState, Component, ReactElement, ReactNode, useRef, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "../Map/Map";
import Marker from "../Map/Marker";
import Spinner from 'react-bootstrap/Spinner';
import { MarkerData } from "../Map/KmlLayer";
import KmlLayer from "../Map/KmlLayer";
import AudioControls from "../AudioPlayer/AudioControls";


const tts = window.speechSynthesis;

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return <Spinner animation="border" role="status" />;
};



export default function TourPage() {
  const [currentUserLocation, setCurrentUserLocation] = useState<google.maps.LatLng | null>(null);
  const [currentZoom, setCurrentZoom] = useState<number>(5);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [currentMarker, setCurrentMarker] = useState<MarkerData | null>(null);

  window.addEventListener('beforeunload', (event) => {
    if (!isSpeaking) {
      tts.cancel();
    }
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentUserLocation(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
      setCurrentZoom(15);
    });
  }, []);

  useEffect(() => {
    play();
  }, [currentMarker]);

  function onMarkerClick(data: MarkerData) {
    setCurrentMarker(data);
    console.log(data.id);
  }

  function play() {
    if (isSpeaking) {
      tts.cancel();
    }

    if (currentMarker?.description) {
        tts.speak(new SpeechSynthesisUtterance(currentMarker.description));
        setIsSpeaking(true);
    } else {
      setIsSpeaking(false);
    }
  }

  function onPlayPauseClick() {
    if (!isSpeaking) {
      if (currentMarker) {
        tts.resume();
        setIsSpeaking(true);
      }
    } else {
      tts.pause();
      setIsSpeaking(false);
    }
  }

  return (
    <div>
      <AudioControls
        title={currentMarker?.name ?? ""}
        onPlayPauseClick={onPlayPauseClick}
        isSpeaking={isSpeaking} />
      <br></br>
      <Wrapper apiKey="AIzaSyAMv1q_ty5fQGylBpv9e9-saxRKMbVZf7w">
        <Map center={currentUserLocation} zoom={currentZoom}>
          <Marker position={currentMarker?.latLng ?? currentUserLocation} />
          <KmlLayer
            onClick={onMarkerClick}
            url="https://storage.googleapis.com/tour-guide-tours/samples/Sample-Tour-1%20(1).kmz"
          />
        </Map>
      </Wrapper>
    </div>
  );
}