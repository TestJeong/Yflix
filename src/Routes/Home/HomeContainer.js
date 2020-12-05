import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nowPlaying: null,
      upcoming: null,
      popular: null,
      movieTrending: null,
      error: null,
      loading: true,
    };
    console.log("pa", props);
  }

  async componentDidMount() {
    try {
      const {
        data: { results: movieTrending },
      } = await movieApi.movieTrending();

      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();

      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();

      const {
        data: { results: popular }, //변수명 변경방법
      } = await movieApi.popular();

      /*  const {
        data: { cast },
      } = await movieApi.movieCredits(27205);

      console.log("aaaa", cast); */

      this.setState({ nowPlaying, upcoming, popular, movieTrending });
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

    console.log("movie", movieTrending);

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
