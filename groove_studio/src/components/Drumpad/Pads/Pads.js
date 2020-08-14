import React from 'react';
import classes from './Pads.module.css';
import Pad from './Pad/Pad';
import {connect} from 'react-redux';

const pads = (props) => {

    const pads = props.padsLoaded ? props.pads.map((pad,index)=>{
        return <Pad padId={pad.keyCode} key={pad.id} clicked={(event)=>props.padClicked(event,index)} soundFile={pad.soundFile}/>;
    }):(
        <>
        <Pad clicked={props.padClicked} soundFile='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'/>
        <Pad clicked={props.padClicked} soundFile='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'/>
        <Pad clicked={props.padClicked} soundFile='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'/>
        <Pad clicked={props.padClicked} soundFile='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'/>
        <Pad clicked={props.padClicked} soundFile='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'/>
        <Pad clicked={props.padClicked} soundFile='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'/>
        <Pad clicked={props.padClicked} soundFile='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'/>
        <Pad clicked={props.padClicked} soundFile='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'/>
        <Pad clicked={props.padClicked} soundFile='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'/>
        </>
    );

    return (
        <div className={classes.Pads}>
            <div className={classes.PadsContainer}>
                {pads}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        pads: state.drumPads,
        vol: state.volume,
        padsLoaded: state.loaded
    }
}

export default connect(mapStateToProps)(pads);