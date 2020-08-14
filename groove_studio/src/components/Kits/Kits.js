import React from 'react';
import Kit from './Kit/Kit';
import {connect} from 'react-redux';
import classes from './Kits.module.css';
import * as actionTypes from '../../store/actions/actionTypes';

const kits = (props) => {
    const kits = props.kits.map(kit=>{
        return (<Kit clicked={()=>props.onKitSelected(kit.name)} key={kit.name} kitName={kit.name} kitImg={kit.img}/>)
    })
    return (
        <div>
            <h2>Select Kit</h2>
            {kits}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        kits: state.kits
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onKitSelected: (kit)=>dispatch({type: actionTypes.SELECT_KIT, selectedKit: kit})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(kits);