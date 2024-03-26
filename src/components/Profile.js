import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy loc.",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div>
        <h2>Profile is here</h2>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h3>{this.state.userInfo.name}</h3>
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          SetCount
        </button>
      </div>
    );
  }
}

export default Profile;
