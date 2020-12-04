import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Router />
      </>
    );
  }
}
export default App;

// Fragments(<>)는 내가 원하는 만큼 컴포넌트를 리턴 할 수 있게 해준다
