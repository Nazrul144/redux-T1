import { useAppSelector } from "../redux/hooks";

const Question = () => {
  const { value } = useAppSelector((state) => state.quiz);
  console.log(value);
  return (
    <div>
      
    </div>
  );
};

export default Question;
