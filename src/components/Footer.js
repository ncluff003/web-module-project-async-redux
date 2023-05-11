import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import chroma from "chroma-js";

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  height: 20%;
  width: 100vw;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${chroma("#539b00").darken(0.5).hex()};

  font-size: 12rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.grayScale.offWhite};

  & .footer-heading {
    position: absolute;
    top: -4rem;
    left: 50%;
    transform: translate(-50%, 0);

    font-size: 3rem;
    color: ${(props) => props.theme.colors.primaryColor};
    font-weight: bold;
  }
`;

function Footer(props) {
  return (
    <StyledFooter>
      <h3 className="footer-heading">Amount Of Affordable Rent</h3>
      {props.rent}
    </StyledFooter>
  );
}

const mapStateToProps = (state) => {
  return {
    // firstname: state.income.firstname,
    // lastname: state.income.lastname,
    // state: state.income.state,
    // exemptions: state.income.exemptions,
    // payCycle: state.rent.payCycle,
    // income: state.rent.income,
    rent: state.rent.rent,
  };
};

export default connect(mapStateToProps, {})(Footer);
