import React, {useEffect} from 'react';
import axios from "axios";


const Explore = () => {
    useEffect(() => {
        axios.get('https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f')
            .then(data => console.log(data)).catch(err => console.error(err))
    })
    return (
        <div>
            Explore
        </div>
    );
};

export default Explore;