import React from 'react';
import classes from './Pad.module.css';

const pad = (props) => {
    return (
        <div className={classes.Pad} onClick={props.clicked}>
            <audio id={props.padId}>
                <source src={props.soundFile}></source>
            </audio>
        </div>
    );
}

export default pad;