import { createSlice } from '@reduxjs/toolkit'
import { quizData } from '../../home/quizData'


const initialState = {
  value: quizData,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
})


export default quizSlice.reducer