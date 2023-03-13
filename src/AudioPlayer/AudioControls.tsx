import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { DropdownButton, Dropdown } from "react-bootstrap";
import logo from './logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faForwardStep, faPlay, faList, faPause } from '@fortawesome/free-solid-svg-icons'

export default function AudioControls({
    isSpeaking,
    onPlayPauseClick,
    title
}:{
    isSpeaking: boolean,
    onPlayPauseClick: (() => void),
    title: string
}) {

    let playOrPauseButton;
    if (isSpeaking) {
        playOrPauseButton = <Button onClick={onPlayPauseClick} variant="outline-dark"><FontAwesomeIcon icon={faPause}/></Button>;
    } else {
        playOrPauseButton = <Button onClick={onPlayPauseClick} variant="outline-dark"><FontAwesomeIcon icon={faPlay}/></Button>;
    }
    

    return (
        <div>
            <div className="d-flex justify-content-center">
            <ButtonToolbar aria-label="Toolbar with button groups">
                 <ButtonGroup className="me-2" aria-label="First group">
                        <Button variant="outline-dark"><FontAwesomeIcon icon={faBackwardStep}/></Button> 
                        {playOrPauseButton}
                        <Button variant="outline-dark"><FontAwesomeIcon icon={faForwardStep}/></Button> 
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Second group">
                    <DropdownButton variant="outline-dark" as={ButtonGroup} title="Locations" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">OLVG</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Spartan Fields</Dropdown.Item>
                     </DropdownButton>
                 </ButtonGroup>
            </ButtonToolbar>
            </div>
            <h3>{title}</h3>
        </div>
    )
}