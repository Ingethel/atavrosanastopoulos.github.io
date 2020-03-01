import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar/navbar";
import Pages from "./Pages/pages";
import theme from "./Stores/Theme/theme";
import Modal from "./Modal/modal";
import "./App.css";

const navigations = {
  internal: [
    {
      icon: "home",
      route: ""
    },
    {
      icon: "code",
      route: "projects"
    }
  ],
  external: [
    {
      icon: "github",
      route: "https://github.com/StavrosAnastopoulos"
    },
    {
      icon: "linkedin",
      route: "https://gr.linkedin.com/in/stavrosanastopoulos"
    },
    {
      icon: "mail",
      route: "mailto:anastopoulos.stavros@gmail.com"
    }
  ]
};

export default function App() {
  return (
    <div>
      <Router>
        <NavBar {...{ theme, navigations }}></NavBar>
        <Pages></Pages>
      </Router>
      <Modal></Modal>
    </div>
  );
}
