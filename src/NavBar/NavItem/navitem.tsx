import React from "react";
import { IconContext } from "react-icons";
import "./navitem.css";

export interface INavItem {
  icon: any;
  route: string;
  color?: string;
}

export default class NavItem extends React.Component<INavItem> {
  render() {
    return (
      <IconContext.Provider
        value={{ color: this.props.color, className: "global-class-name" }}
      >
        <div className="nav-item">{this.props.icon}</div>
      </IconContext.Provider>
    );
  }
}
