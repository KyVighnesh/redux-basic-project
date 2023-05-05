import { Calculate, ConstructionOutlined } from '@mui/icons-material'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "2,490,701"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrementBy10000:(state)=> {
        state.value = eval(state.value.replace(/[^0-9\+\-\*\/]/g, '')-10000)

        state.value = state.value.toLocaleString('en-US')
        

    },
    decrementBy5000:(state)=> {
        state.value = eval(state.value.replace(/[^0-9\+\-\*\/]/g, '')-5000)

        state.value = state.value.toLocaleString('en-US')
    }

   
  },
})

// Action creators are generated for each case reducer function
export const { decrementBy10000, decrementBy5000} = counterSlice.actions

export default counterSlice.reducer