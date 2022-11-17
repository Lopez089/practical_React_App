import { createSlice } from '@reduxjs/toolkit'
import { stateInitial } from '../../constant/index'

export const taskSlice = createSlice({
  name: 'task',
  initialState: stateInitial,
  reducers: {

  }
})

export default taskSlice.reducer
