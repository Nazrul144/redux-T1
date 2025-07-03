import { Button } from "@/components/ui/button";
import { nextQuestion, previousQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const QuizControl = () => {
  const { value, currentQuestionIndex, userAnswer } = useAppSelector((state) => state.quiz);
  const quizCard = value[currentQuestionIndex];
  const dispatch = useAppDispatch();
  const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;

  const handleNext = () => {
    if (isAnswerSelected) {
      dispatch(nextQuestion());
    }
  };

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };

  return (
    <div className="flex justify-between mt-3">
      <Button onClick={handlePrevious} className="cursor-pointer">
        Previous
      </Button>
      <Button onClick={handleNext} className="cursor-pointer">
        Next
      </Button>
    </div>
  );
};

export default QuizControl;
