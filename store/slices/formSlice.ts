import { createSlice } from '@reduxjs/toolkit'
import { ReviewFormTypes } from '../../types'

const initialState: ReviewFormTypes = {
     stars: ["star", "star-outline", "star-outline", "star-outline", "star-outline"],
     userReview:[]
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
        },

        addUserReview:(state,action)=>{
            state.userReview.push(action.payload)
            console.log('Review....',state.userReview)
        },

        deleteUserReview: (state,action) =>{
            state.userReview = state.userReview.filter((_,i)=>{
                return i !== action.payload
            })
        }
    }
})

export const { rateCount, addUserReview, deleteUserReview } = formSlice.actions
export default formSlice.reducer