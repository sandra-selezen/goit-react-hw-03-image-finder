import { Component } from "react";
import { getData } from "../api";
import { Toaster } from 'react-hot-toast';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    serchQuery: "",
    pictures: [],
    isLoading: false,
    error: null,
    currentPage: 1,
  }

  handleFormSubmit = query => {
    this.setState(prevState => ({
      serchQuery: query
    }));
  }

  async componentDidUpdate(prevProps, prevState) {
    const nextQuery = this.state.serchQuery;
    const prevQuery = prevState.serchQuery;

    if (nextQuery !== prevQuery) {
      try {
        const fetchedPictures = await getData(nextQuery, this.state.currentPage);
        this.setState(prevState => ({
          pictures: fetchedPictures
        }))
      } catch (error) {
        this.setState(prevState => ({
          error: error.message
        }))
      }
    }

    // if (nextQuery === prevQuery) {
    //   console.log("query does not changed");
    //   this.setState(prevState => ({
    //     currentPage: prevState.currentPage + 1
    //   }))
    //   const fetchedPictures = await getData(this.state.serchQuery, this.state.currentPage);
    //   console.log(fetchedPictures);
    //   this.setState(prevState => ({
    //     pictures: [...prevState.pictures, fetchedPictures]
    //   }))
    // }
  }

  getMorePictures = () => {

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
