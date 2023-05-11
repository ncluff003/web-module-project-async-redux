import React from "react";
import styled from "styled-components";
import chroma from "chroma-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import actions from "./actions";

const StyledButton = styled.button`
  &.search-button {
    position: absolute;
    height: 100%;
    width: ${(props) => (props.width ? props.width : "10%")};
    border: 0.4rem solid ${(props) => chroma(props.theme.colors.primaryColor).darken(0.5).hex()};
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    right: ${(props) => props.right};

    & .fa-magnifying-glass {
      font-size: 2.4em;
      color: ${(props) => chroma(props.theme.colors.primaryColor).darken(0.5).hex()};
    }

    &:hover {
      cursor: pointer;
      background-color: ${(props) => chroma(props.theme.colors.primaryColor).darken(0.5).hex()};

      & .fa-magnifying-glass {
        font-size: 2.4em;
        color: ${(props) => chroma(props.theme.colors.grayScale.offWhite).hex()};
        transition: color 0.5s;
      }

      transition: background-color 0.5s, border 0.5s, color 0.5s;
    }
  }
`;

const Button = (props) => {
  const { handleChange } = props;
  return (
    <StyledButton className="search-button" width={props.content.width} right={props.content.right} name="recipes" onClick={(e) => handleChange(e, e.target.closest("button"))}>
      <FontAwesomeIcon icon={props.content.icon} />
    </StyledButton>
  );
};

export default connect(null, { getRecipes: actions.getRecipes })(Button);
