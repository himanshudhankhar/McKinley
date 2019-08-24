import React from "react";
import ReactDOM from "react-dom";
import DetailedMessage from "./DetailedMessage";
import cookie from "react-cookies";
import Login from "./LoginPage";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginID: "",
      showLogin: false,
      messageArray: []
    };
    this.closeLogin = this.closeLogin.bind(this);
  }
  componentDidMount() {
    let loginId = cookie.load("loginId");
    if (loginId === null || loginId === undefined || loginId !== "allowed") {
      this.setState({ showLogin: true });
    }
  }
  closeLogin() {
    this.setState({ showLogin: false });
  }
  render() {
    return (
      <div>
        {this.state.showLogin === true ?  
          <Login closeLogin={this.closeLogin} />
          : 
          <DetailedMessage MessageArray={this.state.messageArray} />
         }
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
