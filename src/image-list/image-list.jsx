import React, { Component } from "react";
import './image-list.css';
import Image from './image';

class ImageList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log('IMAGELIST PROPS: ', this.props);
    const images = this.props.imageData.map((image) =>
      <Image image={image} key={image.id}/>
    )
    return (
      <main className="images">
        {images}
      </main>
    );
  }
}

export default ImageList;