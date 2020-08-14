import React, { Component } from 'react';
import classes from './Drumpad.module.css';
import Pads from './Pads/Pads';
import PadControls from './PadControls/PadControls';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

class Drumpad extends Component {
    state = {
        currentSound: ''
    }

    componentDidMount(){
        this.props.onInitPads();
    }

    padClickHandler = (event,index) => {
        event.target.childNodes[0].play();
        this.setState({currentSound: this.props.kit[index].id});
    };

    keyPressedHandler = (event) => {
        const activatedPad = document.getElementById(event.keyCode);
        const pressedPad = this.props.kit.find(element=>element.keyCode === event.keyCode);
        
        if(activatedPad){
            activatedPad.play();
            this.setState({currentSound: pressedPad.id});
        }
    };

    render(){
        return (
            <div tabIndex='0' onKeyDown={this.keyPressedHandler} className={classes.Drumpad}>
                <Pads keyStroke={this.props.keyStroke} padClicked={this.padClickHandler}/>
                <PadControls selectKit={this.props.selectKit} currentSound={this.state.currentSound}/>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        kit: state.drumPads
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitPads: ()=>dispatch({type: actionTypes.INIT_PADS})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drumpad);