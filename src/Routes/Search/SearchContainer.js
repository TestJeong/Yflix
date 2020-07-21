import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false, // 디폴트로 아무것도 로딩하지 않지 않을거니까
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        nowPlaying={movieResults}
        upcoming={tvResults}
        popular={searchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}
