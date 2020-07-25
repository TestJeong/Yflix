import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ topRated, popular, airingTodady, loading, error }) =>
  null;

TVPresenter.prototype = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingTodady: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
