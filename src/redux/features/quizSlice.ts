import { createSlice } from '@reduxjs/toolkit'
import { quizData } from '../../home/quizData'


const initialState = {
  value: quizData,
  currentQuestionIndex:0,
  userAnswer : Array(quizData.length).fill(null)
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setAnswer: (state, action)=> {
        const {currentIndex, answer} = action.payload
        state.userAnswer[currentIndex] = answer
    }
  },
})


export default quizSlice.reducer