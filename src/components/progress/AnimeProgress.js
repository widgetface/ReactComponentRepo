import React from "react";
import Anime from "react-anime";

let AnimeProgress = ({ value = 0 }) => (
  <Anime easing="easeOutElastic" value={100} easing="linear">
    <progress id="file" max="100" value={value} />
  </Anime>
);

export default AnimeProgress;
