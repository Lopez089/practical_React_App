import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'task',
  initialState: [],
  reducers: {
    initialTask: (state, action) => {
      action.payload.map((payload) => {
        if(payload.id )
        state.push(payload)
      })
    }
  }
})

export default taskSlice.reducer
export const { initialTask } = taskSlice.actions
