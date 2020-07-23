import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"), //includes는 "/moive/"가 포함되어 있으면 true 아님 false를 반환한다
    };
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
    console.log(this.props);
    if (isNaN(parsedId)) {
      return push("/"); //NaN이며 push하고 함수를 종료
    }
    let result;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(this.props);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

//리터 없이 해주면 사용자를 다른 페이지로 보내고 콘솔로그는 실행이된다 왜냐면 자바스크립트는 함수를 끝내지 않았기 때문에
