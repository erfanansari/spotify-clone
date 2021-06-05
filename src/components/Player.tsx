import React from 'react';
// import {useAppSelector, useAppDispatch} from "../redux/hooks";
import SpotifyWebApi from "spotify-web-api-js";

interface Props {
    spotify: SpotifyWebApi.SpotifyWebApiJs;
    playlists: any;
}

const Player = ({playlists}: Props) => {
    // console.log(playlists)
    // const user = useAppSelector(state => state.data.user)
    // const dispatch = useAppDispatch()
    return (
        <div>
            <h1>welcome to spotify</h1>
        </div>
    );
};

export default Player;