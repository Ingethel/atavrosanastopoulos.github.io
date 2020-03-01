import React from "react";
import { observer } from "mobx-react";
import { ITheme } from "../../../Stores/Theme/theme";
import "./project-card.css";
import { IconContext } from "react-icons";
import { iconLibrary } from "../../../Icons/icon-library";

interface IProjectCard {
  title: string;
  summary: string;
  tags: string;
  img: string;
}

@observer
export default class ProjectCard extends React.Component<{
  project: IProjectCard;
  theme: ITheme;
  actionIcon: string;
  onClick: () => void;
}> {
  private card = {
    backgroundColor: this.props.theme.colorMain,
    borderColor: this.props.theme.colorMain
  };

  render() {
    return (
      <div className="card" style={this.card}>
        <IconContext.Provider
          value={{
            color: this.props.theme.colorLink,
            className: "action-icon"
          }}
        >
          <div onClick={() => this.props.onClick()}>
            {iconLibrary[this.props.actionIcon]}
          </div>
        </IconContext.Provider>
        <h3 style={{ color: this.props.theme.colorLink, padding: "10px" }}>
          {this.props.project.title}
        </h3>
        <hr style={{ borderColor: this.props.theme.colorLink }} />
        <p
          style={{ color: this.props.theme.colorBackground, padding: "10px" }}
          dangerouslySetInnerHTML={{ __html: this.props.project.summary }}
        ></p>
        <p
          className="tags"
          style={{
            color: this.props.theme.colorBackground
          }}
        >
          {this.props.project.tags}
        </p>
        <img src={this.props.project.img} alt={this.props.project.img}></img>
      </div>
    );
  }
}
