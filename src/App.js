import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./App.css";
import { Landing } from "./components/Landing";

/*

  I could connect the old way first, and then work on connecting to the store the newer way and then work on using Thunk.

  In fact, that is what I will do.

  Redux Store = {

    FORM SETUP
    exemptionLimit [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    FORM INPUT

    first name
    last name
    state
    exemptions
    pay cycle
    income

    CALCULATED BY API

    net income
    rent
  }

*/

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      {/* <Form /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
