import { Component } from "react";
import axios from "axios";
import { Searchbar } from "./Searchbar/Searchbar";

axios.defaults.baseURL = "https://pixabay.com/api/";

export class App extends Component {
  state = {
    query: "",
    pictures: [],
    isLoading: false,
  }

  handleFormSubmit = query => {
    this.setState({ query });
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </>
    )
  }
}
