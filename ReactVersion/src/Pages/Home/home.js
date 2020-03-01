import React from "react";
import theme from "../../Stores/Theme/theme";
import { observer } from "mobx-react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = observer(() => {
  const { colorMain, colorText } = theme;
  const textColor = {
    color: colorText
  };
  const mainColor = {
    color: colorMain
  };
  return (
    <div className="container">
      <h1 style={mainColor}>Hello World!!!</h1>
      <hr
        style={{
          borderColor: colorMain
        }}
      />
      <p style={textColor}>
        Welcome to my website. Lets get to know each other.
      </p>
      <p style={textColor}>Let's start with me, shall we?</p>
      <br />
      <p style={textColor}>
        I am a software developer mainly focusing on the Front End as I enjoy
        visualising data and interacting with the interface.
      </p>
      <p style={textColor}>
        Up until now I have been working in small teams creating applications
        for the Maritime Industry.
      </p>
      <p style={textColor}>
        Other interests include Computer Vision and Graphics, Computer Games
        and, well, what kind of scientist are you if you are not fascinated by
        Machine Learning...
      </p>
      <br />
      <p style={textColor}>
        Do you want to see some of my past projects?{" "}
        <Link to="projects" style={mainColor}>
          yes, kind sir, I do.
        </Link>
      </p>
      <p style={textColor}>
        My favorite is the Volume Visualisation with Ray Tracing.
      </p>
    </div>
  );
});

export default Home;
