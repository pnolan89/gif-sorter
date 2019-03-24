import React, { Component } from "react";
import './image-list.css';
import Image from './image';

class ImageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const gifdata = [1, 2, 3, 4, 5];
    const images = gifdata.map((image) =>
      <Image image={image}/>
    )
    return (
      <main className="images">
        {images}
      </main>
    );
  }
}

export default ImageList;