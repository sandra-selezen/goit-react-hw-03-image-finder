import { Component } from "react";
import { toast } from 'react-hot-toast';
import { Header, SearchForm, Input, Button } from "./Searchbar.styled";
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
      return toast('Please enter search word!', { icon: '🦄', });
    }
    this.props.onSubmit(query);
    this.setState({ query: "" });
  }

  render() {
    return (
      <Header>
        <SearchForm className="form" onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleQueryChange}
            type="text"
            name="query"
            value={this.state.query}
            placeholder="Search images and photos"
          />
          <Button type="submit" className="button">
            <span className="button-label">Search</span>
          </Button>
        </SearchForm>
      </Header>
    )
  }
}