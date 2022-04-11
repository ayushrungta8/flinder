import { useState } from "react";
import styled from "styled-components";
import styles from "../../styles/quiz.module.css";

const QuizCard = ({ question, answer, setAnswers }) => {
  const [selectedOption, setSelectedOption] = useState(answer);
  const [multiSelectedOptions, setMultiSelectedOptions] = useState([]);
  const handleSelect = (option) => {
    console.log(option);
    setSelectedOption(option);
    setAnswers(option);
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
    setAnswers(option);
  };
  const handleInput = (e) => {
    setSelectedOption(e.target.value)
    setAnswers( e.target.value );
  };
  return (
    
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
          <input className={styles.quiz_input} type={question.input_type} name={question.input_type} id={question.input_type} required={true} autoComplete="true" onChange={(e) => handleInput(e)} value={selectedOption} />
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
 
  );
};

const Question = styled.div`
  font-size: 28px;
  font-weight: 400;
  margin: 20px 0;
  text-align:left;
  @media only screen and (max-width:800px){
    font-size:16px;
    max-width:90%;
    margin-left:1rem;
  }

`;
const QuestionContainer = styled.div`


`;
const Option = styled.label`
  /* max-width: 600px; */
  /* background-color: #c2ccff; */
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
  @media only screen and (max-width:800px){
    font-size:16px;
    
  }
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
