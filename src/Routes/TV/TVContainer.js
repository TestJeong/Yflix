import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      topRated: null,
      popular: null,
      airingToday: null,
      error: null,
      loading: true,
      tvTrending: null,
      isTV: pathname.includes("/tv"),
    };
  
  }

  async componentDidMount() {
    const { isTV } = this.state;
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();

      const {
        data: { results: tvTrending },
      } = await tvApi.tvTrending();

      const {
        data: { results: popular },
      } = await tvApi.popular();

      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();

      this.setState({ topRated, popular, airingToday, tvTrending, isTV });
    } catch {
      this.setState({ error: "Can't find movie information" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const {
      topRated,
      popular,
      airingToday,
      loading,
      error,
      tvTrending,
      isTV,
    } = this.state;

    console.log("Asdfads", isTV);
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        tvTrending={tvTrending}
        loading={loading}
        isTV={isTV}
        error={error}
      />
    );
  }
}
