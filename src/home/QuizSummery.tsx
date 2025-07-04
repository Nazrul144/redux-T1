import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function QuizSummery() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Quiz Summery</CardTitle>
        </CardHeader>
        <CardContent>
          <h3>You got 4 out of 10</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default QuizSummery;
