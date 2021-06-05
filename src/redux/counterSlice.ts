import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'

// Define a type for the slice state
interface CounterState {
    user: any;
    playlists: any;
    playing: boolean;
    item: null | string;
    token: null | string;
    searchTerm: null | string;
}

// Define the initial state using that type
const initialState: CounterState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    searchTerm: null
}

export const counterSlice = createSlice({
    name: 'data',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload
        },
        setToken: (state, action: PayloadAction<any>) => {
            state.token = action.payload
        },
        setPlaylists: (state, action: PayloadAction<any>) => {
            state.playlists = action.payload
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload
        }
    },
})

export const {setUser, setToken, setPlaylists, setSearchTerm} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
// export const selectCount = (state: RootState) => state.data.user

export default counterSlice.reducer