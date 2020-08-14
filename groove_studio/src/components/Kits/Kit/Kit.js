import React from 'react';
import classes from './Kit.module.css';

const kit = props => {
    return (
        <div className={classes.Kit}>
            <div className={classes.KitLogo} style={{
                backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/reactstudio-7faaa.appspot.com/o/heat_kit.svg?alt=media&token=e18e4c28-6ecd-482f-8843-eba694262fa4")',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            </div>
            <div>
                <p className={classes.KitName}>{props.kit}</p>
            </div>
        </div>
    );
}
export default kit;