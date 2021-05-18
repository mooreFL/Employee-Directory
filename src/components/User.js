import React, { Component } from "react";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the User API for users
componentDidMount(){  
  this.searchUser("users");
  }

  searchUser = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchUser(this.state.search);
  };

  render() {
    return (
      <div>
       
      </div>
    );
  }
}

export default SearchResultContainer;