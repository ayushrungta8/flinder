import { useState } from "react";
import styled from "styled-components";

const QuizCard = ({ question, answers, setAnswers, quizQuestions, currentPage, setCurrentPage }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [multiSelectedOptions, setMultiSelectedOptions] = useState([]);
  const handleSelect = (option) => {
    console.log(option);
    setSelectedOption(option);
    setAnswers({ ...answers, [question.question.id]: option });
  };

  const handleMultiSelect = (option) => {
    let tempMultiSelectedOptions = [...multiSelectedOptions];
    if (multiSelectedOptions.includes(option)) {
      console.log("removing");
      setSelectedOption(selectedOption.replace(option, ""));
      tempMultiSelectedOptions = multiSelectedOptions.filter(
        (o) => o !== option
      );
      setMultiSelectedOptions(multiSelectedOptions.filter((o) => o !== option));
    } else {
      console.log("adding");
      setSelectedOption(selectedOption.concat(option));
      tempMultiSelectedOptions = [...multiSelectedOptions, option];
      setMultiSelectedOptions([...multiSelectedOptions, option]);
    }
    console.log(multiSelectedOptions);
    setAnswers({
      ...answers,
      [question.question.id]: tempMultiSelectedOptions,
    });
  };
  const handleInput = (e) => {
    setAnswers({ ...answers, [question.question.id]: e.target.value });
  };
  return (
    <Card>
      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>

      <QuestionHeader>
        <NavigationButton onClick={() =>currentPage!==0 && setCurrentPage(currentPage - 1)} disabled={currentPage===0}>&lt; Previous</NavigationButton>
        <Heading>
          Question {quizQuestions.indexOf(question) + 1}/{quizQuestions.length}
        </Heading>
        <NavigationButton onClick={() => currentPage!==quizQuestions.length-1 && setCurrentPage(currentPage + 1)} disabled={currentPage===quizQuestions.length-1}>Next &gt;</NavigationButton>
      </QuestionHeader>
      <QuestionContainer>

        <Question>{question.question.text}</Question>
        {question.type === "select" &&
          question.options.map((option, index) => (
            <Option
              onClick={() => handleSelect(option)}
              option={option}
              selectedOption={selectedOption}
              key={index}
            >
              <Bullet>{String.fromCharCode(65 + index)}</Bullet>
              {option}
            </Option>
          ))}
        {question.type === "input" && (
          <input type="number" onChange={(e) => handleInput(e)} />
        )}

        {question.type === "multiselect" &&
          question.options.map((option, index) => (
            <Option
              onClick={() => handleMultiSelect(option)}
              option={option}
              selectedOption={selectedOption}
              key={index}
            >
              <Bullet>{String.fromCharCode(65 + index)}</Bullet>
              {option}
            </Option>
          ))}
      </QuestionContainer>
    </Card>
  );
};
const Card = styled.div`
  min-width: 600px;
  width: 80%;
  min-height: 500px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  border-radius: 8px;
  overflow: hidden;
`;
const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: rgba(126, 146, 255, 0.2); ;
`;
const ProgressBar = styled.div`
  width: 10%;
  height: 100%;
  background-color: #5664e1;
`;
const Heading = styled.div`
  font-size: 28px;
  font-weight: 300;
  display: flex;
  align-items: center;
  `;
const Question = styled.div`
  font-size: 28px;
  font-weight: 400;
  margin: 20px 0;
  `;
const QuestionContainer = styled.div``;
const QuestionHeader = styled.div`
margin-top: 40px;
display: flex;
justify-content: space-between;
align-items: center;
width:100%;
padding: 0 10px;
`;
const NavigationButton = styled.div`
font-size: 20px;
/* color:#19237C; */
color: ${(props) => (props.disabled ? "#ccc" : "#19237C")}; 
cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};


`
const Option = styled.label`
  background-color: ${(props) =>
    props.selectedOption.includes(props.option) ? "#c2ccff" : "#E5E9FF"};
  padding: 15px;
  font-size: 22px;
  font-weight: 400;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
`;
const Bullet = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #b4bfff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 400;
`;
export default QuizCard;
