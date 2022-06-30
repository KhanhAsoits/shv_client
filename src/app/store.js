import {configureStore} from '@reduxjs/toolkit'
import defaultReducer from '../features/default.reducer'

const store = configureStore({
    reducer: {
        default: defaultReducer
    }

})
export default store