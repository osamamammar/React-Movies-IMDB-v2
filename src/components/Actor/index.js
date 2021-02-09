import React from "react";
import { Wrapper, Image } from "../Actor/Actor.styles";
import PropTypes from "prop-types";
const Actor = ({ name, character, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb"></Image>
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

Actor.prototype = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};
export default Actor;
