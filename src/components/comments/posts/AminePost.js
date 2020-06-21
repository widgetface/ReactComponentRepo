import React from "react";
import Anime from "react-anime";

let AnimePost = ({ title, text = [], translate = "1rem", delay = 500 }) => (
  <Anime opacity={[0, 1]} translateY={translate} delay={(e, i) => i * delay}>
    <h1>{title}</h1>
    <section>
      {text.map((sentence) => (
        <p>{sentence}</p>
      ))}
    </section>
  </Anime>
);

export default AnimePost;
