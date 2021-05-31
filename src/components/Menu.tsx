import React, {ReactNode, useEffect, useState} from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Header";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import {Hidden} from "@material-ui/core";
import Player from "./Player";
import Login from "./Login";
import {getTokenFromResponse} from "../spotify";
import SpotifyWebApi from "spotify-web-api-js";

const drawerWidth = 220;


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            // backgroundColor: theme.palette.common.black,
            backgroundColor: theme.palette.common.white,
            padding: '20px',
            height: '100vh',
            // padding: theme.spacing(3),
        },

    }),
);

const spotify = new SpotifyWebApi();

interface Props {
    children: ReactNode;
}

const Menu = (props: Props) => {
    const classes = useStyles();
    const [token, setToken] = useState<string | null>(null)
    useEffect(() => {
        const {access_token} = getTokenFromResponse()
        console.log(getTokenFromResponse(), 'gettoken')
        console.log(access_token)
        window.location.hash = '';
        if (access_token) {
            setToken(access_token)
            spotify.setAccessToken(access_token)
            spotify.getMe().then(user => {
                console.log(user, 'user')
            })
        }
        console.log(token, 'token')
        console.log(access_token, '_token')
    }, [token])
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <Hidden xsDown>
                <PermanentDrawerLeft/>
            </Hidden>
            <main className={classes.content}>
                <Hidden xsDown>
                    <div className={classes.toolbar}/>
                </Hidden>
                {token ? <Player/> : <Login/>}
            </main>

        </div>
    );
}
export default Menu