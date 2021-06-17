import React, {useState, useEffect} from 'react';
import TrackSearchResult from "./TrackSearchResult";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import {setSearchTerm, setPlayingTrack} from "../redux/counterSlice";
// import axios from "axios";

const spotifyApi = new SpotifyWebApi()
const Explore = () => {
        const dispatch = useAppDispatch();
        const [searchResults, setSearchResults] = useState<any>([])
        // const [playingTrack, setPlayingTrack] = useState<any>('sfdsfds')
        console.log(searchResults)
        const searchTerm = useAppSelector(state => state.data.searchTerm)
        const token = useAppSelector(state => state.data.token)
        const playingTrack = useAppSelector(state => state.data.playingTrack)
        const chooseTrack = (track: any) => {
            dispatch(setPlayingTrack(track))
            dispatch(setSearchTerm(''));
        }
        useEffect(() => {
            if (!searchTerm) return
            let cancel = false
            const timer = setTimeout(() => {
                spotifyApi.searchTracks(searchTerm).then(res => {
                    console.log(res)
                    if (cancel) return
                    setSearchResults(res.tracks.items.map(track => {
                        const smallestAlbumImage = track.album.images.reduce((acc, cur) => {
                            if (cur.height && acc.height)
                                if (cur.height < acc.height) return cur
                            return acc
                        }, track.album.images[0])
                        return {
                            artist: track.artists[0].name,
                            title: track.name,
                            uri: track.uri,
                            album: smallestAlbumImage.url
                        }
                    }))
                }).catch(err => alert(err))
            }, 500)
            return () => {
                cancel = true
                clearTimeout(timer)
            }
        }, [searchTerm])
        searchResults.map((track: any) => console.log(track))

        return (
            <div>
                {searchResults.map((track: any) => (
                    <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack}/>
                ))}
                <Player token={JSON.parse(token)} trackUri={playingTrack?.uri}/>
            </div>
        );
    }
;

export default Explore;