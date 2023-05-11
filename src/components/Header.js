import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  height: 10%;
  width: 100vw;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2rem;
  background-color: ${(props) => props.theme.colors.primaryColor};

  font-size: 6rem;
  font-weight: bold;
  color: #f0f0f0;

  & .fa-utensils {
    margin-right: 1rem;
    font-size: 0.6em;
  }

  & .title-container {
    position: relative;
    height: 100%;
    width: 11%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-end;

    & h1 {
      font-size: 0.67em;
      font-weight: bold;
    }

    & h1,
    & .sub-title {
      margin-bottom: 0;
      line-height: 1;
    }

    & .sub-title {
      font-size: 0.3em;
      font-weight: normal;
      transform: translate(-1rem, 0);
    }
  }
`;

function Header(props) {
  return (
    <StyledHeader>
      <FontAwesomeIcon icon={faUtensils} />
      <div className="title-container">
        <h1>Head Chef</h1>
        {/* <p className="sub-title">Recipe Curator</p> */}
      </div>
    </StyledHeader>
  );
}

export default Header;
