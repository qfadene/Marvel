/** Import External */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 20%;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  padding-top:30px;
  padding-bottom:30px;
  align-items: center;
  justify-content: center;
`;

const DarkNb = styled.div`
  padding: 10px;
  color: #750f12;
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover {
    color: #ed181e;
  }
`;

const BrightNb = styled.div`
  padding: 10px;
  color: #ed181e;
  font-size: 1.2rem;
`;

const PageNumber = (props) => {
  return (
    <Container>
      {props.page > 0 ? (
        <DarkNb onClick={props.onPreviousPage}>{props.page - 1}</DarkNb>
      ) : null}

      <BrightNb>{props.page}</BrightNb>

      {props.page < props.maxPage ? (
        <DarkNb onClick={props.onNextPage}>{props.page + 1}</DarkNb>
      ) : null}
    </Container>
  );
};

export default PageNumber;
