import React from 'react';
import {createStyles, Theme, makeStyles} from "@material-ui/core";

const drawerWidth = 220;

const useStyles = makeStyles((theme: Theme) => createStyles({
    footer: {
        backgroundColor: '#333',
        width: '100%',
        height: '4rem',
        position: 'absolute',
        bottom: '56px',
        [theme.breakpoints.up('sm')]: {
            // width: `calc(100% - ${drawerWidth}px)`,
            // bottom: 0
            zIndex: 2000,
            width: '100%',
            marginRight: '220px',
            position: 'absolute',
            left: '-0',
            bottom: 0,
        }


    }
}))

function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.footer}>
            <button onClick={() => alert(2423)} style={{color: '#fff'}}>click on me</button>
        </div>
    );
}

export default Footer;