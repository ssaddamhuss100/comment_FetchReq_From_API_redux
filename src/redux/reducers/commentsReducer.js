import { createSlice } from "@reduxjs/toolkit";
// import redux toolkit methods here
const INITIAL_STATE = { comments: [], isLoading: false, error: null };
// define comments reducer function here

    const commentSlice = createSlice({
          name:"comment",
          initialState:INITIAL_STATE,
          reducers:{
           start :(state,action)=>{
            state.isLoading = true;
           },
           success :(state,action)=>{
            state.comments = action.payload;
            state.isLoading = false;
           },
           fetchError : (state,action)=>{
            state.error = "Failed to fetch comments";
            state.isLoading = false;
           }
        }
    })


// export the comments reducer function and action creators here
export const commentActions = commentSlice.actions;

export const commentReducer = commentSlice.reducer;

export const commentSelector = (state)=>state.commentReducer;
