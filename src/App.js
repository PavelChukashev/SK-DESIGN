import React from "react";
import { GlobalStyles } from './GlobalStyles.style'
import { StyledForm } from "./components/styles/Form.styles";
import { StyledDescription } from "./components/styles/Description.styles";

function App() {
  return (
    <div className="main-container">
      <GlobalStyles />
      <StyledDescription />
      <StyledForm />
    </div>
  );
}

export default App;
