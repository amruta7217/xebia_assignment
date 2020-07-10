import React, { PureComponent } from "react";

class Login extends PureComponent {
  state = {
    username: "",
    password: "",
  };

  handleUserName = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePass = (e) => {
    this.setState({ password: e.target.value });
  };

  handleClick = () => {
    try {
      const { username, password } = this.state;
      if (username === "amigo" && password === "delta") {
        alert("Login Successfully");
        this.props.history.push({ pathname: "/", state: true });
      } else {
        alert("Please enter valid email and password");
        this.setState({ username: "", password: "" });
      }
    } catch (error) {}
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="container p-4">
        <h3 className="text-center">Welcome to login</h3>
        <div className="mt-4 col-lg-6">
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={username}
              onChange={this.handleUserName}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={this.handlePass}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
