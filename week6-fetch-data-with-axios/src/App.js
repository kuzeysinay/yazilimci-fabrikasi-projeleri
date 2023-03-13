import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Spinner,
} from "reactstrap";
import "./style.css";
import axios from "axios";

class App extends Component {
  
  state = {
    users: [],
    loading: true,
  };

  async fetchUsers() {
    let { data } = await axios("https://jsonplaceholder.typicode.com/users");
    this.setState({
      users: data,
      loading: false,
    });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="container">
      {this.state.loading ? (
          <Spinner className="spinner" >Loading ....</Spinner>
        ) : (
        <div className="body">
        <ListGroup flush className="list">
          {this.state.users.map((users) => (
            <ListGroupItem className="listitem">
              <ListGroupItemHeading>
                {users.name}
              </ListGroupItemHeading>
              <ListGroupItemText>
                {users.email}
              </ListGroupItemText>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      )}
    </div>
    );
  }
}

export default App;


