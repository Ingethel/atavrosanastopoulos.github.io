import { observable } from "mobx";

export interface ITheme {
  colorMain: string;
  colorBackground: string;
  colorLink: string;
  colorText: string;
}

class Theme implements ITheme {
  id = Math.random();
  @observable colorMain = "#282c34";
  @observable colorBackground = "#f4fdff";
  @observable colorLink = "#61dafb";
  @observable colorText = "black";
}
const theme = new Theme();

export default theme;
