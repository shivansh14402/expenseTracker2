import React from "react";
import ExpenseDate from "./Components/ExpenseTable/ExpenseDate";


function App() {
  return (
    <div>
      <ExpenseDate date={new Date(2022, 5, 20)} />
    </div>
  );
}

export default App;
