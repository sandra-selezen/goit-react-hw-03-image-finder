import { Component } from "react";
import { toast } from 'react-hot-toast';
export class Searchbar extends Component {
  state = {
    query: ""
  }

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    if (query.trim() === "") {
      toast.error("Enter a search word");
      return;
    }
    this.props.onSubmit(query);
    this.setState({ query: "" });
  }

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleQueryChange}
            className="input"
            type="text"
            name="query"
            value={this.state.query}
            placeholder="Search images and photos"
          />
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    )
  }
}