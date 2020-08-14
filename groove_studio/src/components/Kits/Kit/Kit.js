import React from 'react';
import classes from './Kit.module.css';

const kit = props => {
    return (
        <div onClick={props.clicked} className={classes.Kit}>
            <div className={classes.KitLogo} style={{
                backgroundImage: 'url('+props.kitImg+')',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            </div>
            <div>
                <p className={classes.KitName}>{props.kitName}</p>
            </div>
        </div>
    );
}
export default kit;