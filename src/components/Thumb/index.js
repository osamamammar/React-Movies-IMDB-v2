import React from "react";
//styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      <Image src={image} alt="movie-thumb"></Image>
    </div>
  );
};

export default Thumb;
