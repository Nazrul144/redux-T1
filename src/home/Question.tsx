import { Card, CardHeader } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button } from "@/components/ui/button";
import QuizControl from "./QuizControl";
import { setAnswer } from "@/redux/features/quizSlice";


const Question = () => {
  const { value, currentQuestionIndex, userAnswer} = useAppSelector((state) => state.quiz);
  const quizCard = value[currentQuestionIndex]
  const currentAnswer = userAnswer[currentQuestionIndex]
  const dispatch = useAppDispatch()

  const handleCorrectAnswer = (ans: string)=>{
    dispatch(setAnswer({
      questionIndex: currentQuestionIndex,
      answer: ans
    }))
  }

  return (
    <div className="flex justify-center mt-20 gap-4">
      <Card className="w-[450px]">
        <CardHeader>
          {quizCard.question}
          <div>
           {
            quizCard?.options?.map((option, index)=>(
              <Button variant={option === currentAnswer ? "default" : "outline"} onClick={()=>handleCorrectAnswer(option)} key={index} className="w-full mt-3" size={"lg"}>{option}</Button>
            ))
           }
          </div>
          <h1 className="font-bold">Answer: {quizCard.correctAnswer}</h1>
          <QuizControl/>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Question;
