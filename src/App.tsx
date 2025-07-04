import { Button } from "./components/ui/button";
import Question from "./home/Question";
import QuizSummery from "./home/QuizSummery";
import { useAppSelector } from "./redux/hooks";

function App() {
  const {quizComplete} = useAppSelector((state)=> state.quiz)
  return (
    <>
      <div>
        <Button>Click me</Button>
        {!quizComplete ? <Question/> : <QuizSummery/>}
      </div>
    </>
  );
}

export default App;
