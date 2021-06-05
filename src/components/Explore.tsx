import React, {useState, useEffect} from 'react';
import TrackSearchResult from "./TrackSearchResult";
import {useAppSelector} from "../redux/hooks";
import SpotifyWebApi from "spotify-web-api-js";
// import axios from "axios";

const spotifyApi = new SpotifyWebApi()
const Explore = () => {
        const [searchResults, setSearchResults] = useState<any>([])
        console.log(searchResults)
        const searchTerm = useAppSelector(state => state.data.searchTerm)
        useEffect(() => {
            if (!searchTerm) return
            let cancel = false
            spotifyApi.searchTracks(searchTerm).then(res => {
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
            })
            return () => {
                cancel = true
            }
        }, [searchTerm])
        return (
            <div>
                {searchResults.map((track: any) => (
                    <TrackSearchResult track={track} key={track.uri}/>
                ))}
            </div>
        );
    }
;

export default Explore;