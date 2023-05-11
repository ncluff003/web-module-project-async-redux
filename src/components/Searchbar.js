import chroma from "chroma-js";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import actions from "./actions";

const StyledSearchbar = styled.label`
  &.search-container {
    position: relative;
    height: 5rem;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & p.search-label {
      font-size: 2.4em;
      color: ${(props) => props.theme.colors.grayScale.offWhite};
      position: absolute;
      top: -1.5em;
      left: 3em;
    }

    & input.recipe-search {
      height: 5rem;
      width: 85%;
      background-color: ${(props) => chroma(props.theme.colors.grayScale.offWhite).alpha(0.5).hex()};
      border: 0.4rem solid ${(props) => chroma(props.theme.colors.primaryColor).darken(1).alpha(0.8).hex()};
      border-radius: 0.5rem;
      padding-left: 0.5em;
      font-size: 1.75em;
      color: ${(props) => chroma(props.theme.colors.grayScale.darkCharcoal).alpha(0.8).hex()};
      &:focus {
        outline: none;
      }
    }
  }
`;

const Searchbar = (props) => {
  const { updateSearchTerm, getRecipes } = props;
  const handleChange = (e, button) => {
    e.preventDefault();
    let { name, value } = e.target;
    button ? (name = button.name) : name;

    console.log(name, value, e.target);
    switch (name) {
      case "search":
        return updateSearchTerm(value);
      case "recipes":
        return getRecipes(props.searchTerm, props.page);
      default:
        return;
    }
  };

  return (
    <StyledSearchbar className="search-container">
      <p className="search-label">Search Recipes</p>
      <input type="text" className="recipe-search" name="search" onChange={(e) => handleChange(e)} />
      <Button content={{ width: "7.5%", right: "7.5%", icon: faMagnifyingGlass }} handleChange={handleChange} />
    </StyledSearchbar>
  );
};

const mapStateToProps = (state) => {
  return {
    searchTerm: state.recipe.searchTerm,
    page: state.recipe.recipes.page,
  };
};

export default connect(mapStateToProps, { updateSearchTerm: actions.updateSearchTerm, getRecipes: actions.getRecipes })(Searchbar);
