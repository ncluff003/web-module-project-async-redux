import React from "react";
import styled from "styled-components";
import chroma from "chroma-js";
import Searchbar from "./Searchbar";

const StyledLanding = styled.section`
  &.landing {
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) => chroma(props.theme.colors.primaryColor).alpha(0.7)};
  }
`;

export const Landing = (props) => {
  return (
    <StyledLanding className="landing">
      <Searchbar />
    </StyledLanding>
  );
};
