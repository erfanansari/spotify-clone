import React, {ReactNode, useEffect} from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Header";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import Login from "./Login";
import Player from "./Player";
import {Hidden} from "@material-ui/core";
import {getTokenFromResponse} from "../config.spotify";
import {useAppSelector, useAppDispatch} from "../redux/hooks";
import {setUser, setToken, setPlaylists} from "../redux/Slicers";
import {drawerWidth} from "../theme";
import Cookies from 'js-cookie'
import SpotifyWebApi from "spotify-web-api-js";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        '@global': {
            '.PlayerRSWP': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '4.7rem',
                [theme.breakpoints.down('sm')]: {
                    height: '7rem'
                }
            },
            '.__1xc0f9k': {
                [theme.breakpoints.down('md')]: {
                    paddingBottom: '.9rem'
                }
            }
        },
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
            overflow: 'auto',
            backgroundColor: theme.palette.common.black,
            // backgroundColor: theme.palette.common.white,
            // padding: '20px',
            height: 'calc(100vh - 4.7rem)',
            [theme.breakpoints.down('xs')]: {
                marginTop: '55px',
                zIndex: theme.zIndex.drawer,
                height: 'calc(100vh - 13.5rem)'
            },
            // padding: theme.spacing(3),
            '&::-webkit-scrollbar': {
                width: '.7rem',
            },
            '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                // marginBottom: 'calc(4.7rem + 56px)',
                [theme.breakpoints.up('sm')]: {
                    // marginBottom: '4.7rem',
                    marginTop: '64px',
                }
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#666',
            }
        },

    }),
);

const spotifyApi = new SpotifyWebApi();

interface Props {
    children: ReactNode;
}

const Menu = ({children}: Props) => {
    const token = useAppSelector(state => state.data.token)
    const playingTrack = useAppSelector(state => state.data.playingTrack)
    const cookieToken = Cookies.get('token')
    const dispatch = useAppDispatch()


    const classes = useStyles();

    useEffect(() => {

            const {access_token, expires_in} = getTokenFromResponse();
            window.location.hash = '';
            const expires = parseInt(expires_in) / 60;
            if (access_token) {
                const setTokenInCookie = () => {
                    Cookies.set('token', access_token, {
                        expires
                    })
                    setTimeout(() => {
                        dispatch(setToken(null))
                    }, expires)
                }
                setTokenInCookie()
            }
            if (cookieToken) {
                dispatch(setToken(cookieToken))
                spotifyApi.setAccessToken(cookieToken)

                spotifyApi.getMe().then(user => {
                    dispatch(setUser(user))
                    spotifyApi.getUserPlaylists(user.id).then(playlists => {
                        dispatch(setPlaylists(playlists))
                    })
                })
            }

        }, [cookieToken, token, dispatch]
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
                <Player token={token} trackUri={playingTrack?.uri}/>
            </main>
        </div>
    );
}
export default Menu