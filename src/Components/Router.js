import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);

// 기본적으로 Router가 정보를 Route에게 준다 (location, math등)
//Route 컴포넌트란?
//컴포넌트는 현재 주소창의 경로와 매치될 경우 보여줄 컴포넌트를 지정하는데 사용됩니다.
//path prop을 통해서 매치시킬 경로를 지정하고 component prop을 통해서 매치되었을 때 보여줄 컴포넌트를 할당합니다.
// Redirect는 일치하는 라우터가 없다면 to로 보내준다
