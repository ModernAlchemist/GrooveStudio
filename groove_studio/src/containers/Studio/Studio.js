import React, {Component} from 'react';
import Drumpad from '../../components/Drumpad/Drumpad';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import Modal from '../../components/UI/Modal/Modal';
import Kits from '../../components/Kits/Kits';

class Studio extends Component {
    state = {
        selectingKit: false
    }

    selectKitHandler = () => {
        this.setState({selectingKit: true});
    }

    selectKitFinishHandler = () => {
        this.setState({selectingKit: false});
    }

    render(){
        return (
            <div>
                <Modal show={this.state.selectingKit} selectFinish={this.selectKitFinishHandler}>
                    <Kits/>
                </Modal>
                <Drumpad selectKit={this.selectKitHandler}/>
            </div>
        );
    }
}

export default Studio;