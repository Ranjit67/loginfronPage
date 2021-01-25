import React from 'react'
import "./Inner.css"
import {Lock} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    
    texter: {
        width: "80%",
        borderBottom: "1px solid red",
        color:"red",
    },
    multilineColor:{
        color:'red'
    }
   
  });
export default function Inner() {
    const classes = useStyles();
    return (
        <div className="inner">
            <div className="fiv-part">
               <div className="fev-div"> <Lock className="fev" fontSize="large" /></div>
                <p className="texter">Hint: demo/demo</p>
            </div>
            <TextField 
            className={classes.texter}
           
            id="standard-basic" label="Username" />
            <div className="r-div"><p className="r">Required</p></div>
            <TextField className={classes.texter} id="standard-basic" label="Password" />
            <div className="r-div"><p className="r">Required</p></div>
            <button className="buto"> SIGN IN</button>
        </div>
    )
}
