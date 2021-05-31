import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'

// Define a type for the slice state
interface CounterState {
    user: null | string;
    playlists: null | string[];
    playing: boolean;
    item: null | string;
}

// Define the initial state using that type
const initialState: CounterState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
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
        }
    },
})

export const {setUser,} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
export const selectCount = (state: RootState) => state.data.user

export default counterSlice.reducer