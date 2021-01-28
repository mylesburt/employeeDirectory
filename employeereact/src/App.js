import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
  };

  // Map over this.state.employees and render a FriendCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map((employee) => (
          <FriendCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            birthday={employee.birthday}
            email={employee.email}
            phone={employee.phone}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
