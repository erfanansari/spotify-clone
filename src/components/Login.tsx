import React from 'react';
import {Grid} from "@material-ui/core";
import {createStyles, Theme, makeStyles} from "@material-ui/core";
import {accessUrl} from "../spotify";

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        marginTop: '4rem',
        backgroundColor: '#000',
    },
    loginBtn: {
        textDecoration: 'none',
        color: '#ffff',
        backgroundColor: '#1db954',
        padding: '1rem',
        borderRadius: '99px'
    }
}))
const Login = () => {
    const classes = useStyles()
    return (
        <Grid container justify="center" className={classes.container} spacing={5}
              direction="column" alignItems="center">
            <Grid item>
                <img style={{maxWidth: '100%'}}
                     src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                     alt="spotify logo"
                />
            </Grid>
            <Grid item>
                <a className={classes.loginBtn} href={accessUrl}>LOGIN TO SPOTIFY</a>
            </Grid>
        </Grid>
    );
};

export default Login;