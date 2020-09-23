import React from "react";
import Question from "./Question";

const QuestionList = ({ questions }) => {
  console.log('Questions:', questions)

  return (
    <div className="questionList">
      {questions.map((q) => <Question question={q} key={q.id} />)}
    </div>
  );
}


export default QuestionList;