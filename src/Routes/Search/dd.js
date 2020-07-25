import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false, // 디폴트로 아무것도 로딩하지 않지 않을거니까
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state; // 비구조화 할당으로 state에 있는 값중 searchTherm을 불러온다 this.state.searchTherm 가 같고 const search = this.state.searchTherm과 같다
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      this.setState({ movieResults, tvResults });
      //
    } catch {
      this.setState({ error: "Can't find results" });
    } finally {
      //  예외가 발생하든 안하든 try문이나 catch 무 종료시 무조건 실행된다
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;

    return (
      <SearchPresenter
        nowPlaying={movieResults}
        upcoming={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
