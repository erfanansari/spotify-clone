import React, {ReactNode, useEffect, useState} from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Header";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import {Hidden} from "@material-ui/core";
// import Player from "./Player";
import Login from "./Login";
import Footer from "./Footer";
// import Footer from "./Footer";
import {getTokenFromResponse} from "../spotify";
import SpotifyWebApi from "spotify-web-api-js";
import {useAppSelector, useAppDispatch} from "../redux/hooks";
import {setUser, setToken, setPlaylists} from "../redux/counterSlice";

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
            // padding: '20px',
            height: '100vh',
            // padding: theme.spacing(3),
        },

    }),
);

const spotifyApi = new SpotifyWebApi();

interface Props {
    children: ReactNode;
}

const Menu = ({children}: Props) => {
    // const [playlists, setPlaylists] = useState<any>([])
    const token = useAppSelector(state => state.data.token)
    const playlists = useAppSelector(state => state.data.playlists)
    const tokenStorage = localStorage.getItem('token')
    const dispatch = useAppDispatch()
    const classes = useStyles();
    useEffect(() => {
            const {access_token} = getTokenFromResponse()
            window.location.hash = '';
            console.log(localStorage.getItem('token'))
            if (access_token) {
                localStorage.setItem('token', JSON.stringify(access_token))
                dispatch(setToken(access_token))
                spotifyApi.setAccessToken(access_token)
            } else if (tokenStorage) {
                dispatch(setToken(tokenStorage))
                spotifyApi.setAccessToken(JSON.parse(tokenStorage))

                spotifyApi.getMe().then(user => {
                    dispatch(setUser(user))
                    spotifyApi.getUserPlaylists(user.id).then(playlists => {
                        dispatch(setPlaylists(playlists))
                    })
                })
            }

        }, [tokenStorage, token, dispatch]
    )
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
                {token ? children : <Login/>}
                <Footer/>
            </main>

        </div>
    );
}
export default Menu