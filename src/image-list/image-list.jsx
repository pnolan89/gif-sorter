import React, { Component } from "react";
import './image-list.css';
import Image from './image';

class ImageList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let sortedImages = this.props.imageData;
    if (this.props.sortBy === 'size-l') {
      sortedImages = this.props.imageData.sort((a, b) => {
        return b.images.original.size - a.images.original.size;
      });
    } else if (this.props.sortBy === 'size-s') {
      sortedImages = this.props.imageData.sort((a, b) => {
        return a.images.original.size - b.images.original.size;
      });
    }
    console.log('SORT: ', sortedImages);
    const images = this.props.imageData.map((image) =>
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