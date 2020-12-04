import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
      match,
    } = props;
    console.log("match", match);
    this.state = {
      credits: null,
      result: null,
      recommend: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"), //includes는 "/moive/"가 포함되어 있으면 true 아님 false를 반환한다
    };
  }
  async componentDidUpdate(prevProps) {
    const { isMovie } = this.state;
    const urlId = this.props.match.params.id;
    const prevUrlId = prevProps.match.params.id;
    if (urlId !== prevUrlId) {
      try {
        if (isMovie) {
          const { data: result } = await movieApi.movieDetail(urlId);

          const {
            data: { results: recommend },
          } = await movieApi.movieRecommend(urlId);

          const {
            data: { cast: credits },
          } = await movieApi.movieCredits(urlId);

          this.setState({ result, credits, recommend });
        } else {
          const { data: result } = await tvApi.showDetail(urlId);

          const {
            data: { results: recommend },
          } = await tvApi.tvRecommend(urlId);

          const {
            data: { cast: credits },
          } = await tvApi.tvCredits(urlId);

          this.setState({ result, credits, recommend });
        }
      } catch {
        this.setState({ error: "Can't find anything." });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const { isMovie } = this.state;
    const parsedId = parseInt(id); //문자열을 입력하면 NaN 값이 출력

    /* if (isNaN(parsedId)) {
      return push("/"); //NaN이며 push하고 함수를 종료
    } */

    try {
      if (isMovie) {
        const { data: result } = await movieApi.movieDetail(parsedId);

        const {
          data: { results: recommend },
        } = await movieApi.movieRecommend(parsedId);

        const {
          data: { cast: credits },
        } = await movieApi.movieCredits(parsedId);

        this.setState({ result, credits, recommend });
      } else {
        const { data: result } = await tvApi.showDetail(parsedId);

        const {
          data: { results: recommend },
        } = await tvApi.tvRecommend(parsedId);

        const {
          data: { cast: credits },
        } = await tvApi.tvCredits(parsedId);

        this.setState({ result, credits, recommend });
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading, credits, recommend, isMovie } = this.state;

    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        credits={credits}
        recommend={recommend}
        isMovie={isMovie}
      />
    );
  }
}

//리터 없이 해주면 사용자를 다른 페이지로 보내고 콘솔로그는 실행이된다 왜냐면 자바스크립트는 함수를 끝내지 않았기 때문에
