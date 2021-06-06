import React, {useState, useEffect} from 'react';
import TrackSearchResult from "./TrackSearchResult";
import {useAppSelector} from "../redux/hooks";
import SpotifyWebApi from "spotify-web-api-js";
import Footer from "./Footer";
// import axios from "axios";

const spotifyApi = new SpotifyWebApi()
const Explore = () => {
        const [searchResults, setSearchResults] = useState<any>([])
        const [playingTrack, setPlayingTrack] = useState<any>([])
        console.log(searchResults)
        const searchTerm = useAppSelector(state => state.data.searchTerm)
        const token = useAppSelector(state => state.data.token)
        const chooseTrack = (track: any) => {
            setPlayingTrack(track)
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
        return (
            <div>
                {searchResults.map((track: any) => (
                    <TrackSearchResult track={track} key={track.url} chooseTrack={chooseTrack}/>
                ))}
                <Footer token={token} trackUri={playingTrack?.uri}/>
            </div>
        );
    }
;

export default Explore;