import React from "react";

const Question = ({ question }) => {
  const { title, author, body } = question;
  const { username } = author;

  return (
    <div className="question">
      {/* TODO - Profile image / card */}
      <div className="questionTitle">{title}</div>
      <div className="questionBody">{body}</div>
      <div>- {username}</div>
    </div>
  )
}

export default Question;