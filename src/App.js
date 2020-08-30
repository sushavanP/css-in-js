import React from "react";
import styled from "styled-components";
import { Card } from "./components/card.component";
import "./styles.css";

const Text = styled.div`
  color: red;
  font-size: 28px;
  border: ${({ isActive }) =>
    isActive ? "1px solid black" : "3px dotted black"};
`;

// const textStyles = {
//   color: "red",
//   fontSize: "24px"
// };

function App() {
  return (
    <div className="App">
      <Card>
        <Text isActive={true}>I am a component</Text>
      </Card>
    </div>
  );
}

export default App;
