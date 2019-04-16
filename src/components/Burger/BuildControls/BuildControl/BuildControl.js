import React from 'react'; 
import classes from './BuildControl.css'; 

const buildControl = (props) => {
    return(
        <div className={classes.BuildControl}> 
            <strong><p className={classes.label}>{props.label}</p></strong>
            <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
            <button className={classes.More} onClick={props.added}>More</button> 
        </div>
    );  
}

export default buildControl;