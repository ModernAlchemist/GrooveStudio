import React from 'react';
import classes from './PadControls.module.css';
import {connect} from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';

const padControls = (props) => {
    return (
        <div className={classes.PadControls}>
            <div>
                <p style={{fontSize: '25px'}}>REACT STUDIO</p>
                <i style={{fontSize: '30px',display:'block'}} className="fas fa-power-off"></i>
                <input style={{fontSize: '14px', marginBottom: '0px'}} onChange={(event)=>props.onChangeVolume(event)} type="range" min="0" max="100" value={props.vol} className="Slider"/>
                <div style={{fontSize: '14px', marginTop: '0px', marginBottom: '50px'}}>Volume</div>
                <div className={classes.SoundInfo}>
                    <div className={classes.SoundLabel}>Kit</div>
                    <div className={classes.SoundName}>{props.currentKit ? props.currentKit : 'Kit Not Loaded'}</div>
                </div>
                <div className={classes.SoundInfo}>
                    <div className={classes.SoundLabel}>Sound</div>
                    <div className={classes.SoundName}>{props.currentSound}</div>
                </div>
                <p style={{fontSize: '14px'}} onClick={props.selectKit}>Select Kit</p>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        vol: state.volume,
        currentKit: state.kitName
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onChangeVolume: (event)=>dispatch({type: actionTypes.VOLUME_CHANGE, event: event})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(padControls);