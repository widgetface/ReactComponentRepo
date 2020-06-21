import React from "react";
import PropTypes, { number } from "prop-types";

const { string } = PropTypes;

const BasicHeader = ({ type = 1, text = "" }) => {
  const Header = `h${type}`;
  return <Header>{text}</Header>;
};

BasicHeader.propTypes = {
  type: number,
  text: string,
};

export default BasicHeader;
