import axios from "axios";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PhotoGrid from "./components/PhotoGrid";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photoList: [],
      searchQuery: "",
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/photos/")
      .then((res) => this.setState({ photoList: res.data }))
      .catch((err) => console.log(err));
  };

  handleSubmit = (photo) => {
    console.log(photo);
    if (photo.id) {
      axios
        .put(`/api/photos/${photo.id}/`, photo)
        .then((res) => this.refreshList())
        .catch((err) => console.log(err));
    } else {
      axios
        .post("/api/photos/", photo)
        .then((res) => this.refreshList())
        .catch((err) => console.log(err));
    }
  };

  handleDelete = (photo) => {
    axios
      .delete(`/api/photos/${photo.id}/`)
      .then((res) => this.refreshList())
      .catch((err) => console.log(err));
  };

  handleSearchQueryChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar
            onSubmit={this.handleSubmit}
            searchQuery={this.state.searchQuery}
            onSearchQueryChange={this.handleSearchQueryChange}
          />
          <PhotoGrid
            onDelete={this.handleDelete}
            photos={this.state.photoList}
            searchQuery={this.state.searchQuery}
          />
        </header>
      </div>
    );
  }
}

export default App;
