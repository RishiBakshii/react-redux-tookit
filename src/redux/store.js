import {configureStore} from '@reduxjs/toolkit'
import counterSlice  from '../features/counter'


// reducers are something that handles the events
export const store=configureStore({
    reducer:{
        counterSlice,
    },
})