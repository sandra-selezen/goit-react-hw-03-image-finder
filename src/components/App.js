import { Component } from "react";
import { getData } from "../api";
import { Toaster } from 'react-hot-toast';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";



export class App extends Component {
  state = {
    query: "",
    pictures: [],
    isLoading: false,
    error: null,
  }

  handleFormSubmit = async query => {
    this.setState({ query });
    
    try {
      let page = 1;
      // this.setState({ isLoading: true, error: null });
      const fetchedPictures = await getData(query, page);
      this.setState({ pictures: fetchedPictures });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  // fetchPictures = async query => {

  //   try {
  //     this.setState({ isLoading: true, error: null });
  //     const fetchedPictures = await getData(this.state.query);
  //     this.setState({ pictures: fetchedPictures });
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictures={this.state.pictures} />
        <Toaster position="top-center"/>
      </>
    )
  }
}
