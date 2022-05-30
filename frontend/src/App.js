import axios from "axios";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PhotoGrid from "./components/PhotoGrid";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photoList: [],
      searchQuery: "",
    };
  }

  getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/photos/")
      .then((res) => this.setState({ photoList: res.data }))
      .catch((err) => console.log(err));
  };

  handleSubmit = async (photo) => {
    if (photo.id) {
      axios
        .put(`/api/photos/${photo.id}/`, photo)
        .then((res) => this.refreshList())
        .catch((err) => console.log(err));
    } else {
      const csrfToken = this.getCookie("csrftoken");
      try {
        await axios.post("/api/photos/", photo, {
          headers: {
            "Content-type": "application/json",
            "X-CSRFToken": csrfToken,
          },
        });
        this.refreshList();
      } catch (err) {
        console.log(err);
      }
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
