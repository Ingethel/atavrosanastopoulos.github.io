import { observable, computed } from "mobx";
import database from "./projects-db";

class ProjectsStore {
  id = Math.random();
  _projects = database;
  @observable filter = "";
  @observable groupBy = "";

  @computed get displayProjects(): any[] {
    return this.filter
      ? this._projects.filter(
          p => p.tags.includes(this.filter) || p.title.includes(this.filter)
        )
      : this._projects;
  }
}
const projectsStore = new ProjectsStore();

export default projectsStore;
