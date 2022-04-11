import { useEffect, useState } from "react";
import styled from "styled-components";
import { Questions } from "./Components/Question";
import QuizCard from "./Components/QuizCard";
import styles from "../styles/quiz.module.css"
import { mapper } from "../helpers/mapper";
import {create_new_form} from "../remote/newForm";


export default function Quiz() {
  const [answers, setAnswers] = useState(["","","","","","","","","","","",[],""]);
  const [index, setIndex] = useState(0); // current question that has to be displayed
  const quizQuestions = [...Questions];
  console.log(quizQuestions);

  const handleSimpleSelect = (value) => {
    let copy = [...answers];
    copy[index] = value;
    setAnswers(copy);
  };
  const handleMultiSelect = (value) => {
    let copy = [...answers];
    let index_pos = copy[index].indexOf(value);
    if (index_pos !== -1) {
      // this item is already there then remove it
      copy[index].splice(index_pos, 1);
    } else {
      copy[index].push(value);
    }
    setAnswers(copy);
  };

  const go_back = ()=>{
    if(index>0){
      setIndex(ind => ind-1)
    }
  }

  const form_submission =async  (processed_data)=>{
    let response = await create_new_form(processed_data)
    if(!response){
      // something went wrong
    }else{
      // do things now
      console.log(response)
    }
  }
  const go_next = ()=>{
    if(index<12){
      setIndex(ind => ind+1)
    }else{
      // this is the finish button let's hit the fucking backend
      console.log(answers)
      let processed_data = mapper(answers)
      console.log(processed_data)
      form_submission(processed_data)
    }
  }
  return (
    <Container>
      <Title>QUIZ</Title>
      <Card>
        <ProgressBarContainer>
          <ProgressBar style={{width:parseInt((index*100)/12)+'%'}} />
        </ProgressBarContainer>
        <div className={styles.button_holder}>
          <div className={styles.button_holder_left} onClick={go_back} >
            <img src="/left-arrow.png" alt="it's a left arrow to go to previous question"/>
            <span>Previous</span>
          </div>
          <div className={styles.button_holder_right} onClick={go_next}>
            <span>{index==12 ? "Finish 🎉":"Next"}</span>
            <img src="/left-arrow.png" alt="it's a right arrow to go to next question"/>
          </div>
        </div>
        <Heading>Question {index}/12</Heading>
        <CenterContainer>
          <QuizCard
            question={quizQuestions[index]}
            key={index}
            answer={answers[index]}
            setAnswers={
              ["select", "input"].includes(quizQuestions[index].type)
                ? handleSimpleSelect
                : handleMultiSelect
            }
          />
        </CenterContainer>
      </Card>
    </Container>
  );
}



const Card = styled.div`
  // min-width: 600px;
  width: 80%;
  min-height: 500px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  border-radius: 8px;
  overflow: hidden;
  @media only screen and (max-width:800px){
    width:90%
  }
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
    transition:all ease 0.25s;
`;
const Heading = styled.div`
  font-size: 28px;
  font-weight: 300;
  margin-top: 40px;
  @media only screen and (max-width:800px){
   font-size:18px;
   font-weight:bold;
   margin-top:1rem;
  }
`;
const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url("pattern.svg");
  background-color: #7e92ff;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const Title = styled.h1`
  font-size: 110px;
  color: #fff;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 4px 0 #000,
    1px 1px 0 #000;
  font-family: "Aberforth", sans-serif;
  margin: 40px 0;

  @media only screen and (max-width:600px){
    font-size:60px;
    margin:30px 0px;
  }
`;
const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:0rem 1rem;
`;
