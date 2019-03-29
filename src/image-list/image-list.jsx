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
      case 'score-h':
        imageData.sort((a, b) => {
          return b._score - a._score;
        });
        break;
      case 'score-l':
        imageData.sort((a, b) => {
          return a._score - b._score;
        });
        break;
      case 'frames-h':
        imageData.sort((a, b) => {
          return b.images.original.frames - a.images.original.frames;
        });
        break;
      case 'frames-l':
        imageData.sort((a, b) => {
          return a.images.original.frames - b.images.original.frames;
        });
        break;
      case 'height-l':
        imageData.sort((a, b) => {
          return b.images.original.height - a.images.original.height;
        });
        break;
      case 'height-s':
        imageData.sort((a, b) => {
          return a.images.original.height - b.images.original.height;
        });
        break;
      case 'width-l':
        imageData.sort((a, b) => {
          return b.images.original.width - a.images.original.width;
        });
        break;
      case 'width-s':
        imageData.sort((a, b) => {
          return a.images.original.width - b.images.original.width;
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