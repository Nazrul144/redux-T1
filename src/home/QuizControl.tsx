import { Button } from "@/components/ui/button"

const QuizControl = () => {

  const handleNext = ()=>{
    
  }
  const handlePrevious = ()=>{

  }
  return (
    <div className="flex justify-between mt-3">
      <Button onClick={handleNext} className="cursor-pointer">Previous</Button>
      <Button onClick={handlePrevious} className="cursor-pointer">Next</Button>
    </div>
  )
}

export default QuizControl