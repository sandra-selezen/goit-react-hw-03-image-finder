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
      serchQuery: query,
      currentPage: 1
    }));
  }

  async componentDidUpdate(_, prevState) {
    const nextQuery = this.state.serchQuery;
    const prevQuery = prevState.serchQuery;
    const nextPage = this.state.currentPage;
    const prevPage = prevState.currentPage;

    if (nextQuery !== prevQuery) {
      try {
        const fetchedPictures = await getData(nextQuery, this.state.currentPage);
        this.setState(prevState => ({
          pictures: fetchedPictures,
        }))
      } catch (error) {
        this.setState(prevState => ({
          error: error.message
        }))
      }
    }

    if (nextPage !== prevPage && nextQuery === prevQuery) {
      try {
        const fetchedPictures = await getData(nextQuery, nextPage);
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...fetchedPictures],
        }))
      } catch (error) {
        this.setState(prevState => ({
          error: error.message
        }))
      } finally {
        
      }
    }
  }

  changePage = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1
    }))
  }

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictures={this.state.pictures} />
        <Button onClick={this.changePage} />
        <Toaster position="top-center"/>
      </Layout>
    )
  }
}
