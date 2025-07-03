import { Card, CardHeader } from "@/components/ui/card";
import { useAppSelector } from "../redux/hooks";
import { Button } from "@/components/ui/button";
import QuizControl from "./QuizControl";


const Question = () => {
  const { value, currentQuestionIndex, userAnswer} = useAppSelector((state) => state.quiz);
  const quizCard = value[currentQuestionIndex]
  const currentAnswer = userAnswer[currentQuestionIndex]

  const handleCorrectAnswer = (ans: string)=>{
    console.log(ans);
  }

  return (
    <div className="flex justify-center mt-20 gap-4">
      <Card className="w-[450px]">
        <CardHeader>
          {quizCard.question}
          <div>
           {
            quizCard?.options?.map((option, index)=>(
              <Button onClick={()=>handleCorrectAnswer(option)} key={index} className="w-full mt-3" size={"lg"}>{option}</Button>
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
