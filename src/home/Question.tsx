import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "../redux/hooks";
import { Button } from "@/components/ui/button";

const Question = () => {
  const { value } = useAppSelector((state) => state.quiz);
  
  return (
    <div>
      <Card className="grid grid-cols-3 gap-6">
          {
            value?.map((quiz, index)=>(
              <CardContent className="border-2 border-red-500 rounded-lg p-8" key={index}>
                <CardTitle>{quiz.question}</CardTitle>
                <div>
                  {quiz?.options?.map((quiz, index)=>(
                    <Button className="w-full mt-3" key={index}>{quiz}</Button>
                  ))}
                </div>
                <CardTitle className="mt-3">Answer: {quiz.correctAnswer}</CardTitle>
              </CardContent>
            ))
          }
      </Card>
    </div>
  );
};

export default Question;
