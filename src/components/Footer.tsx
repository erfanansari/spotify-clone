import React, {useEffect, useState} from 'react';
import SpotifyPlayer from 'react-spotify-web-playback'
import {createStyles, Theme, makeStyles} from "@material-ui/core";

const drawerWidth = 220;

const useStyles = makeStyles((theme: Theme) => createStyles({
    footer: {
        backgroundColor: 'red',
        borderTop: '1px solid #444',
        width: '100%',
        height: '4.7rem',
        position: 'absolute',
        bottom: '56px',
        [theme.breakpoints.up('sm')]: {
            // width: `calc(100% - ${drawerWidth}px)`,
            // bottom: 0
            zIndex: theme.zIndex.drawer,
            width: '100%',
            marginRight: '220px',
            position: 'absolute',
            left: '-0',
            bottom: 0,
        }


    }
}))

function Footer({trackUri, token}: any) {
    const [play, setPlay] = useState(false)
    useEffect(() => setPlay(true), [trackUri])
    const classes = useStyles()
    console.log(token)
    if (!token) return null
    return (
        <div className={classes.footer}>
            <SpotifyPlayer token={token} callback={state => {
                if (!state.isPlaying) setPlay(false)
            }
            } play={play} showSaveIcon uris={trackUri ? [trackUri] : []}/>
        </div>
    );
}

export default Footer;