import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import SendIcon from "@material-ui/icons/Send";

export default class DetailedMessage extends Component {
  arr = [
    {
      senderId: 3,
      message:
        "Hi\nHow are you?\nWill you join us for tommorows trip to sillicon valley\nIt will be a educational trip."
    },
    {
      senderId: 0,
      message: "Hi\nI cannot come to your trip,\nI am sorry for that"
    }
  ];
  state = {
    anchorEl: null,
    replyText: "",
    messageArray: this.props.MessageArray
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  validReply = input => {
    return true;
  };
  SubmitReply = () => {
    if (this.state.replyText != "") {
      var newArr = this.state.messageArray;
      newArr.push({
        senderId: 0,
        message: this.state.replyText
      });
      this.setState({
        messageArray: newArr,
        replyText: ""
      });
    }
    console.log(this.state);
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  onReplyChange = event => {
    this.setState({ replyText: event.target.value });
  };
  handleKeyPress = event => {
    if (event.key == "Enter" && this.state.replyText != "") {
      this.SubmitReply();
    }
  };
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    if (this.state.messageArray != this.props.MessageArray) {
      this.setState({ messageArray: this.props.MessageArray });
    }
    return (
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "scroll-y",
          maxWidth: 600,
          height: 400,
          position: "relative"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#e7e7e7",
              maxHeight: 50,
              minHeight: 50
            }}
          >
            <div
              style={{ width: "70%", display: "flex", flexDirection: "row" }}
            >
              <Avatar
                alt="Remy Sharp"
                src="http://chittagongit.com//images/avatar-icon/avatar-icon-4.jpg"
                style={{ margin: 10, width: 30, height: 30 }}
              />
              <Typography
                style={{
                  marginTop: 10,
                  marginLeft: "3%"
                }}
              >
                <h6>
                  <b>{this.props.Name}</b>
                </h6>
              </Typography>
            </div>
            <div
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end"
              }}
            >
              <Typography
                style={{
                  marginTop: 10,
                  marginLeft: "20%"
                }}
              >
                <p className="text-muted">{this.props.Date}</p>
              </Typography>
              <IconButton
                color="inherit"
                onClick={this.handleClick}
                style={{
                  marginLeft: "1%"
                }}
              >
                <MoreIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={this.handleClose}
                style={{
                  maxWidth: 200
                }}
              >
                <MenuItem style={{ backgroundColor: "#e7e7e7" }}>
                  <IconButton color="inherit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                    </svg>
                  </IconButton>
                  <p>Delete</p>
                </MenuItem>
                <MenuItem style={{ backgroundColor: "#e7e7e7" }}>
                  <IconButton color="inherit">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M18.546 1l5.454 6.986v15.014h-24v-15.014l5.477-6.986h13.069zm-5.546 14v-3h-2v3h-3l4 4 4-4h-3zm8.474-7l-3.906-5h-11.085l-3.951 5h18.942z" />
                    </svg>
                  </IconButton>
                  <p>Archive</p>
                </MenuItem>
              </Menu>
            </div>
          </div>
          <List style={{ overflow: "auto", maxHeight: 400, marginBottom: 45 }}>
            {this.state.messageArray.map((i, key) => {
              var alignItem = "flex-start";
              var bcColor = "#f1f0f0";
              var txtColor = "#a6a8ab";
              if (i.senderId === 0) {
                console.log("Hello");
                alignItem = "flex-end";
                bcColor = "#3fa6e6";
                txtColor = "#fff";
              }
              return (
                <ListItemText
                  style={{
                    display: "flex",
                    flexDirection: "column",

                    width: "100%",
                    justifyContent: "center",
                    alignItems: alignItem,
                    minHeight: 15,
                    marginTop: 5,
                    marginBottom: 5,
                    paddingLeft: 10
                  }}
                  key={key}
                >
                  {i.message.split("\n").map((ii, kkey) => {
                    return (
                      <p
                        style={{
                          color: txtColor,
                          backgroundColor: bcColor,
                          fontWidth: 15,
                          paddingLeft: 5,
                          paddingRight: 5,
                          borderRadius: 5,
                          marginTop: 5,
                          marginBottom: 5,
                          minHeight: 15,
                          maxWidth: 300
                        }}
                        key={kkey}
                      >
                        {ii}
                      </p>
                    );
                  })}
                </ListItemText>
              );
            })}
          </List>
          <div
            style={{
              disply: "flex",
              flexDirection: "row",
              backgroundColor: "#e7e7e7",
              position: "absolute",
              bottom: 0,
              width: "100%"
            }}
          >
            <Input
              id="inputReply"
              style={{ width: "80%", marginLeft: 10 }}
              placeholder="Give your friend a befitting reply"
              onChange={this.onReplyChange}
              value={this.state.replyText}
              onKeyPress={this.handleKeyPress}
            />

            <IconButton color="inherit" onClick={this.SubmitReply}>
              <SendIcon />
            </IconButton>
          </div>
        </div>
      </Paper>
    );
  }
}
