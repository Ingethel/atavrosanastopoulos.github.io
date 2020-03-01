import React from "react";
import { observer } from "mobx-react";
import { ITheme } from "../Stores/Theme/theme";
import NavItem, { INavItem } from "./NavItem/navitem";
import { Link } from "react-router-dom";
import { iconLibrary } from "../Icons/icon-library";
import "./navbar.css";

@observer
export default class NavBar extends React.Component<{
  theme: ITheme;
  navigations: { [key: string]: INavItem[] };
}> {
  private internalLink = (props: INavItem) => (
    <Link to={props.route}>
      <NavItem {...props}></NavItem>
    </Link>
  );

  private externalLink = (props: INavItem) => (
    <a href={props.route}>
      <NavItem {...props}></NavItem>
    </a>
  );

  private list = (
    listItems: INavItem[],
    routeLink: boolean = true,
    key: string
  ) => (
    <ul key={key}>
      {listItems.map(r => {
        const itemProp = {
          icon: iconLibrary[r.icon],
          route: r.route,
          color: this.props.theme.colorLink
        };
        const link = routeLink
          ? this.internalLink(itemProp)
          : this.externalLink(itemProp);
        return <ol key={r.route}>{link}</ol>;
      })}
    </ul>
  );

  render() {
    const color = { backgroundColor: this.props.theme.colorMain };

    return (
      <div className="navbar-desktop" style={color}>
        {Object.entries(this.props.navigations).map(([key, value], index) =>
          this.list(value, key === "internal", `nav-menu-${index}`)
        )}
      </div>
    );
  }
}
