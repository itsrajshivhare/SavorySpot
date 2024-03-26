import React from "react";
import Profile from "./Profile";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return (
      <div>
        <h1>About Page</h1>
        <h3>This is a class base Component</h3>
        <Profile />
      </div>
    );
  }
}

export default About;
