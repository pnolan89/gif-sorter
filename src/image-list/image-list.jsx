import React, { Component } from "react";
import './image-list.css';
import Image from './image';

class ImageList extends Component {
  constructor(props) {
    super(props);
  }

  filterImageData(imageData) {
    switch (this.props.sortBy) {
      case 'size-l':
        imageData.sort((a, b) => {
          return b.images.original.size - a.images.original.size;
        });
        break;
      case 'size-s':
        imageData.sort((a, b) => {
          return a.images.original.size - b.images.original.size;
        });
        break;
    }
    return imageData;
  }

  render() {
    const images = this.filterImageData(this.props.imageData).map((image) =>
      <Image image={image} key={image.id}/>
    )
    return (
      <div id="image-list">
        {images}
      </div>
    );
  }
}

export default ImageList;