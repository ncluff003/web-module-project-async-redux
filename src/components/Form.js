import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { states } from "./../data/states.js";
import actions from "./actions";

const StyledForm = styled.form`
  &.income-form {
    position: relative;
    height: 80%;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    & .income-form__section {
      height: max-content;
      width: 50%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      align-items: center;

      & .income-form__section__label {
        height: 4rem;
        width: 20%;
        font-size: 2.4rem;
        font-weight: bold;
      }

      & .income-form__section__input,
      & .income-form__section__select {
        height: 4rem;
        width: 20%;
        font-size: 2rem;
        padding: 0.5rem;
        margin-left: 1rem;
      }
    }
  }
`;

function Form(props) {
  const { updateFirstName, updateLastName, updateState, updateExemptions, updatePayCycle, updateIncome } = props;
  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    switch (name) {
      case "firstname":
        return updateFirstName(value);
      case "lastname":
        return updateLastName(value);
      case "state":
        return updateState(value);
      case "exemptions":
        return updateExemptions(Number(value));
      case "cycle":
        return updatePayCycle(value);
      case "income":
        return updateIncome(Number(value));
      default:
        return;
    }
  };

  const calculateMyRent = (e) => {
    e.preventDefault();
    console.log(`Rent Being Calculated!`);
    props.calculateRent(props);
  };

  return (
    <StyledForm className="income-form">
      <section className="income-form__section">
        <label htmlFor="firstname" className="income-form__section__label">
          First Name
        </label>
        <input type="text" className="income-form__section__input" id="firstname" name="firstname" onChange={(e) => handleChange(e)} />
        <label htmlFor="lastname" className="income-form__section__label">
          Last Name
        </label>
        <input type="text" className="income-form__section__input" id="lastname" name="lastname" onChange={(e) => handleChange(e)} />
      </section>
      <section className="income-form__section">
        <label htmlFor="firstname" className="income-form__section__label">
          State
        </label>
        <select name="state" id="state" className="income-form__section__select" onChange={(e) => handleChange(e)}>
          {states &&
            states.map((usState, i) => {
              return (
                <option key={i} className="income-form__section__select__option">
                  {usState}
                </option>
              );
            })}
        </select>
        <label htmlFor="exemptions" className="income-form__section__label">
          Exemptions
        </label>
        <select name="exemptions" id="exemptions" className="income-form__section__select" onChange={(e) => handleChange(e)}>
          {props.options &&
            props.options.map((exemption, i) => {
              return <option key={i}>{exemption}</option>;
            })}
        </select>
      </section>
      <section className="income-form__section">
        <label htmlFor="cycle" className="income-form__section__label">
          Pay Cycle
        </label>
        <select name="cycle" id="cycle" className="income-form__section__select" onChange={(e) => handleChange(e)}>
          {["Annual", "Bi-Annual", "Quarterly", "Monthly", "Bi-Monthly", "Bi-Weekly", "Weekly"].map((cycle, i) => {
            return <option key={i}>{cycle}</option>;
          })}
        </select>
        <label htmlFor="income" className="income-form__section__label">
          Income
        </label>
        <input type="text" className="income-form__section__input" id="income" name="income" min={0} onChange={(e) => handleChange(e)} />
      </section>
      <section className="income-form__section"></section>
    </StyledForm>
  );
}

const mapStateToProps = (state) => {
  return {
    // firstname: state.income.firstname,
    // lastname: state.income.lastname,
    // state: state.income.state,
    // exemptions: state.income.exemptions,
    // payCycle: state.rent.payCycle,
    income: state.rent.income,
    percentage: state.rent.percentage,
    options: state.income.exemptionOptions,
  };
};

export default connect(mapStateToProps, {
  updateFirstName: actions.updateFirstName,
  updateLastName: actions.updateLastName,
  updateState: actions.updateState,
  updateExemptions: actions.updateExemptions,
  updatePayCycle: actions.updatePayCycle,
  updateIncome: actions.updateIncome,
  calculateRent: actions.calculateRent,
})(Form);
