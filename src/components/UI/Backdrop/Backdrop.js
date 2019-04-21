import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => (
    // Displays backdrop is true
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;