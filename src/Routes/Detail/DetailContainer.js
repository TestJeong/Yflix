import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parsedId = parseInt(id); //문자열을 입력하면 NaN 값이 출력
    console.log(this.props);
    if (isNaN(parsedId)) {
      return push("/"); //NaN이며 push하고 함수를 종료
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

//리터 없이 해주면 사용자를 다른 페이지로 보내고 콘솔로그는 실행이된다 왜냐면 자바스크립트는 함수를 끝내지 않았기 때문에
