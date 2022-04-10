//This is the share page


import styled from "styled-components";
// import { feather } from "feather-icons";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
export default function Home() {
  return (
    <Container>
    <PseudoDiv>a</PseudoDiv>
    <CenterContainer>
      <Title>Cheers, you're done!</Title>
      <Subtitle>Share this link with your potential roommates and see if it’s meant to be.</Subtitle>
      <CopyBox>
          <CopyBoxP>Hello</CopyBoxP>
            <CopyBoxBtn>Copy link</CopyBoxBtn>
      </CopyBox>
        <ShareBox>
            <ShareBoxButton>
                <FeatherIcon icon={"copy"}/>
            </ShareBoxButton>
            <ShareBoxButton>
                <FeatherIcon icon={"mail"}/>
            </ShareBoxButton>
            <ShareBoxButton>
                <FeatherIcon icon={"twitter"}/>
            </ShareBoxButton>
            <ShareBoxButton>
                <FeatherIcon icon={"facebook"}/>
            </ShareBoxButton>
            <ShareBoxButton style={{marginRight:"0px"}}>
                <FeatherIcon icon={"instagram"}/>
            </ShareBoxButton>
        </ShareBox>
    </CenterContainer>
    <FrameBox>
        <Image src="/frame.png" height={"180px"} width={"224px"} alt="This is the beautiful frame that Karthika created"/>
    </FrameBox>
    <FrameBox2>
        <Image  height={"180px"} width={"224px"} src="/frame.png" alt="This is the beautiful frame that Karthika created"/>
    </FrameBox2>
  </Container>
  )
}

const FrameBox2 = styled.div`
position:absolute;
right:2%;
top:2%;
transform: rotate(62.48deg);

`

const FrameBox = styled.div`
position:absolute;
left:0%;
bottom:0%;
`

const ShareBox = styled.div`
display:flex;
justify-content:space-between;
margin-top:2rem;

`

const ShareBoxButton = styled.div`
height:64px;
width:64px;
border-radius:50%;
background-color:#F5C1B5;
margin-right:24px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
`

const CopyBox = styled.div`
max-width: 457px;
width:90%;
height: 48px;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 32px;
display:flex;
align-items:center;
padding:0rem 1rem;
justify-content:space-between;
`
const CopyBoxP = styled.p`
font-family: 'General Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 150%;
/* identical to box height, or 27px */

text-align: center;

color: #000000;
`

const CopyBoxBtn = styled.div`
width: 93px;
height: 32px;
left: 352px;
top: 8px;

background: #7E92FF;
border-radius: 32px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
`

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url("pattern.svg");
  background-color: #92BC5C;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  overflow: hidden;
`;
const Title = styled.h1`
font-family: 'General Sans';
font-style: normal;
font-weight: bold;
font-size: 56px;
line-height: 76px;
/* identical to box height */

text-align: center;

color: #000000;
`;
const Subtitle = styled.h2`
max-width:677px;
font-family: 'General Sans';
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 150%;
/* or 42px */

text-align: center;

color: #000000;
`;
const Button = styled.button`
  border: none;
  background-color: #1a1a1a;
  padding: 15px 30px;
  color: #fff;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  font-size: 21px;
  cursor: pointer;
`;
const PseudoDiv = styled.div`
  visibility: hidden;
`;