/** Import External */
import React from "react";
import styled from "styled-components";
import SvgArrow from "../assets/svgArrow";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: center;
`;

const SecondLine = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 2rem;
`;

const PageButton = styled.div`
  border-radius: 10px;
  background: #2b2b2b;
  padding: 0.8rem;
  color: #fff;
  cursor: pointer;
  transition-duration: 0.5s;
  &:hover {
    color: #ed181e;
  }
`;

const ArrowPrevious = styled(SvgArrow)`
  width: 20px;
`;
const ArrowNext = styled(SvgArrow)`
  width: 20px;
  transform: rotate(180deg);
`;

const ButtonText = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 2rem;
  color: #ed181e;
  opacity: 0.3;
`;

const Card = styled.div`
  border-radius: 10px;
  background: #2b2b2b;
  box-shadow: 20px 20px 60px #252525, -20px -20px 60px #313131;
  padding: 0.8rem;
  margin-left: 2rem;
  color: #fff;
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover {
    color: #ed181e;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
`;

const ImageCharacter = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 0 auto;
  transition-duration: 0.5s;
  ${Card}:hover & {
    opacity: 0.3;
    transform: scale(1.05);
  }
`;

const ViewMore = styled.a`
  text-align: center;
  text-decoration: none;
  font-size: 30px;
  font-weight: 800;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition-duration: 0.5s;
  ${Card}:hover & {
    visibility: visible;
    opacity: 0.9;
  }
  &:hover {
    color: #ed181e;
  }
`;

const NameContainer = styled.div`
  width: 100%;
  padding-top: 1rem;
  padding-left: 5px;
`;

const NameCharacter = styled.div`
  text-transform: uppercase;
  font-family: Helvetica;
  font-weight: 600;
`;

const Trombi = (props) => {
  const firstLine = props.characters.slice(0, 5);
  const secondLine = props.characters.slice(5, 9);
  return (
    <Container>
      <FirstLine>
        {firstLine.map((event, index) => {
          return (
            <Card key={index}>
              <ImageContainer>
                <ImageCharacter
                  src={event.thumbnail.path + "/portrait_xlarge.jpg"}
                />
                <ViewMore
                    href={
                      `https://www.google.com/search?q=${event.name.split("(")[0].replace(/ /g, "+")}+marvel`
                    }
                    target="_blank"
                >
                    Tell me more
                </ViewMore>
              </ImageContainer>
              <NameContainer>
                <NameCharacter>{event.name.split("(")[0]}</NameCharacter>
              </NameContainer>
            </Card>
          );
        })}
      </FirstLine>
      <BottomContainer>
        <ButtonContainer>
          <PageButton onClick={props.onPreviousPage}>
            <ArrowPrevious />
          </PageButton>
          <ButtonText>Prev</ButtonText>
        </ButtonContainer>
        <SecondLine>
          {secondLine.map((event, index) => {
            return (
              <Card key={index}>
                <ImageContainer>
                  <ImageCharacter
                    src={event.thumbnail.path + "/portrait_xlarge.jpg"}
                  />
                  <ViewMore
                    href={
                      `https://www.google.com/search?q=${event.name.split("(")[0].replace(/ /g, "+")}+marvel`
                    }
                    target="_blank"
                  >
                    Tell me more
                  </ViewMore>
                </ImageContainer>
                <NameContainer>
                  <NameCharacter>{event.name.split("(")[0]}</NameCharacter>
                </NameContainer>
              </Card>
            );
          })}
        </SecondLine>
        <ButtonContainer>
          <PageButton onClick={props.onNextPage}>
            <ArrowNext />
          </PageButton>
          <ButtonText>Next</ButtonText>
        </ButtonContainer>
      </BottomContainer>
    </Container>
  );
};

export default Trombi;
