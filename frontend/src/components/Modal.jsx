import { Component } from "react";

class AddPhotoModal extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      newPhoto: { label: "", photoURL: "" },
    };
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }
}

export default AddPhotoModal;
