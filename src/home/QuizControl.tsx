import { Button } from "@/components/ui/button";
import { nextQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch } from "@/redux/hooks";

const QuizControl = () => {

  const dispatch = useAppDispatch();


  const handleNext = () => {
    dispatch(nextQuestion());
  };
  
  const handlePrevious = () => {};

  
  return (
    <div className="flex justify-between mt-3">
      <Button onClick={handleNext} className="cursor-pointer">
        Previous
      </Button>
      <Button onClick={handlePrevious} className="cursor-pointer">
        Next
      </Button>
    </div>
  );
};

export default QuizControl;
