import { createSlice } from '@reduxjs/toolkit'
import { ReviewFormTypes } from '../../types'

const initialState: ReviewFormTypes = {
     stars: ["star", "star-outline", "star-outline", "star-outline", "star-outline"]
}

const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        rateCount:(state, action) => {
            const countFilled = action.payload
            let countOutline = action.payload + 1
            for (let index = 0; index <= countFilled ; index++) {
                    state.stars[index] = "star"
                
            }

            for (countOutline; countOutline < state.stars.length; countOutline++) {
                    state.stars[countOutline] = "star-outline"
            }
        }
    }
})

export const { rateCount } = formSlice.actions
export default formSlice.reducer