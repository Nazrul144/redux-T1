import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";

function QuizSummery() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Quiz Summery</CardTitle>
        </CardHeader>
        <CardContent>
          <h3>You got 4 out of 10</h3>
          {/*Progress bar*/}
          <Progress value={33} />
          <div>
            <span>40%</span>
            <span>Performance: Good</span>
          </div>
          <div>
            <p>
                <strong>Incorrect Answer: 5</strong>
            </p>
          </div>
          <div>
            <p>Great job! Keep practicing.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default QuizSummery;
