import React from "react";
import { Card } from "./components/card.component";
import "./styles.css";

const textStyles = {
  color: "red",
  fontSize: "24px"
};

function App() {
  return (
    <div className="App">
      <Card>
        <div style={textStyles}>I am a component</div>
      </Card>
    </div>
  );
}

export default App;
