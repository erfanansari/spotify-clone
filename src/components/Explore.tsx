import React, {useState, useEffect} from 'react';
import TrackSearchResult from "./TrackSearchResult";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import SpotifyWebApi from "spotify-web-api-js";
import {setSearchTerm, setPlayingTrack} from "../redux/counterSlice";

const spotifyApi = new SpotifyWebApi()
const Explore = () => {
        const dispatch = useAppDispatch();
        const [searchResults, setSearchResults] = useState<any>([])
        const searchTerm = useAppSelector(state => state.data.searchTerm)
        const chooseTrack = (track: any) => {
            dispatch(setPlayingTrack(track))
            dispatch(setSearchTerm(''));
        }
        useEffect(() => {
            if (!searchTerm) return
            let cancel = false
            const timer = setTimeout(() => {
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
                            uri: track.uri,
                            album: smallestAlbumImage.url
                        }
                    }))
                }).catch(err => console.error(err, 'err'))
            }, 500)
            return () => {
                cancel = true
                clearTimeout(timer)
            }
        }, [searchTerm])

        return (
            <div>
                {searchResults.map((track: any) => (
                    <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack}/>
                ))}
            </div>
        );
    }
;

export default Explore;