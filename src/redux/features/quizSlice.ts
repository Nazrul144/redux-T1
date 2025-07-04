import { createSlice } from '@reduxjs/toolkit'
import { quizData } from '../../home/quizData'


const initialState = {
  value: quizData,
  currentQuestionIndex:0,
  userAnswer : Array(quizData.length).fill(null),
  quizComplete: false
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setAnswer: (state, action)=> {
        const {questionIndex, answer} = action.payload
        state.userAnswer[questionIndex] = answer
    },
    
    previousQuestion: (state)=>{
        if(state.currentQuestionIndex > 0){
            state.currentQuestionIndex = state.currentQuestionIndex - 1;
        }
    },

    nextQuestion: (state)=>{
        if(state.currentQuestionIndex < state.value.length -1){
            state.currentQuestionIndex = state.currentQuestionIndex + 1;
        }
      
    },
   
  },
})

export const { setAnswer, nextQuestion, previousQuestion} = quizSlice.actions


export default quizSlice.reducer