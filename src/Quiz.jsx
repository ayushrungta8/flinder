import { useEffect, useState } from "react";
import styled from "styled-components";
import { Questions } from "./Questions";
import QuizCard from "./QuizCard";
const Quiz = ({currentPage,setCurrentPage}) => {
  const [answers, setAnswers] = useState({});
  useEffect(() => {
    console.log(answers);
  }, [answers]);
  const quizQuestions = [...Questions];
  return (
    <Container>
      <Title>QUIZ</Title>
      
        <QuizCard
          question={quizQuestions[currentPage]}
          quizQuestions={quizQuestions}
          answers={answers}
          setAnswers={setAnswers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      
    </Container>
  );
};
const Container = styled.div`
  background-image: url("pattern.svg");
  background-color: #7e92ff;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #333333;
`;
const Title = styled.h1`
  font-size: 110px;
  color: #fff;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 4px 0 #000,
    1px 1px 0 #000;
  font-family: "Aberforth", sans-serif;
  margin: 40px 0;
`;

export default Quiz;
