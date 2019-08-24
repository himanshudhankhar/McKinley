import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import cookie from "react-cookies";

import axios from "axios";
const useStyles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    marginLeft: "5px",
    marginRight: "5px",
    width: "200px"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
};
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      password: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.closeLoginPage = this.closeLoginPage.bind(this);
  }
  closeLoginPage() {
    this.setState({ showLogin: false });
    this.props.closeLogin();
  }
  handleChange(event) {
    if (event.target.id === "password")
      this.setState({ password: event.target.value });
    else this.setState({ email: event.target.value });
  }
  doLogin() {
    //make axios post request to this api
    axios
      .post(" https://reqres.in/api/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        cookie.save("loginId", "allowed");
        this.closeLoginPage();
      })
      .catch(error => {
        alert("Invalid Credentials closing it for testing purpose");
        console.log("error", JSON.stringify(error));
        cookie.save("loginId", "allowed");
        this.closeLoginPage();
      });
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Dialog aria-labelledby="Login" open={this.state.showLogin}>
          <DialogTitle
            id="Login"
            style={{ color: "#fff", backgroundColor: "#aaaaee" }}
          >
            Login
          </DialogTitle>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              width: "400px"
            }}
          >
            <TextField
              id="email"
              label="Email"
              type="text"
              // style={{width:'300px'}}

              margin="normal"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              // style={{width:'300px'}}
              autoComplete="current-password"
              margin="normal"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div align="right">
              <Button
                color="primary"
                style={{ color: "#aaaaee" }}
                onClick={this.doLogin}
              >
                Login
              </Button>
            </div>
          </form>
        </Dialog>
      </div>
    );
  }
}
