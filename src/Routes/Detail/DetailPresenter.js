import React from "react";
import PropTypes from "prop-types";
import styled from "styled-commponets";

const DetailPresenter = ({ result, error, lodaing }) => null;

DetailPresenter.prototype = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
