import React from 'react';
import {useAppSelector, useAppDispatch} from "../redux/hooks";
import {setUser} from "../redux/counterSlice";

const Player = () => {
    const user = useAppSelector(state => state.data.user)
    const dispatch = useAppDispatch()
    return (
        <div>
            <h1>welcome to spotify</h1>
            <h1>{user}</h1>
            <button onClick={() => dispatch(setUser('erfan'))}>click me +n</button>
        </div>
    );
};

export default Player;