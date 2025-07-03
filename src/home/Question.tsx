import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "../redux/hooks";
import { Button } from "@/components/ui/button";

const Question = () => {
  const { value } = useAppSelector((state) => state.quiz);
  const quizCard = value[0];
  return (
    <div className="flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{quizCard.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {quizCard.options?.map((option, index) => (
              <Button key={index} size="lg" className="w-full mt-3">
                {option}
              </Button>
            ))}
          </div>
          <h1 className="font-black mt-2">Correct Answer: {quizCard.correctAnswer}</h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default Question;
