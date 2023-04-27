import { Component } from "react";
import { getData } from "../api";
import { Toaster } from 'react-hot-toast';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Layout } from './Layout/Layout';


export class App extends Component {
  state = {
    query: "",
    pictures: [],
    isLoading: false,
    error: null,
  }

  handleFormSubmit = query => {
    this.setState({ query });
    this.getPictures(query);
  }

  getPictures = async (query, page) => {
    page = 1;
    this.setState({ isLoading: true });
    try {
      const pictures = await getData(query, page);
      this.setState({ pictures });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictures={this.state.pictures} />
        <Button onClick={this.getMorePictures} />
        <Toaster position="top-center"/>
      </Layout>
    )
  }
}
