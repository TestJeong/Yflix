import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    movieTrending: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    //api를 받아올때까지 기다린다
    try {
      const {
        data: { results: movieTrending }, //변수명 변경방법
      } = await movieApi.movieTrending();

      const {
        data: { results: nowPlaying }, //변수명 변경방법
      } = await movieApi.nowPlaying();

      const {
        data: { results: upcoming }, //변수명 변경방법
      } = await movieApi.upcoming();

      const {
        data: { results: popular }, //변수명 변경방법
      } = await movieApi.popular();

      const {
        data: { cast },
      } = await movieApi.movieCredits(27205);

      console.log(cast);

      this.setState({ nowPlaying, upcoming, popular, movieTrending });
      //
    } catch {
      this.setState({ error: "Can't find movies information." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const {
      nowPlaying,
      upcoming,
      movieTrending,
      popular,
      error,
      loading,
    } = this.state;

    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        movieTrending={movieTrending}
        error={error}
        loading={loading}
      />
    );
  }
}

//마운트 되면 nowPlayin 등 찾아서 다 찾으면 state 값을 설정한다
