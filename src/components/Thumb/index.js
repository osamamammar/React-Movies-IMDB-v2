import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb"></Image>
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb"></Image>
      )}
    </div>
  );
};

Thumb.prototype = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};
export default Thumb;
