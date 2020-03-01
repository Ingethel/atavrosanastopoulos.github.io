import { Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./pages.css";
import { observer } from "mobx-react";
import theme from "../Stores/Theme/theme";

const Home = lazy(() => import("./Home/home"));
const Projects = lazy(() => import("./Projects/projects"));

const Pages = observer(() => {
  const { colorBackground } = theme;
  return (
    <div className="desktop-pages" style={{ backgroundColor: colorBackground }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Suspense>
    </div>
  );
});

export default Pages;
