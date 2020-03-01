import React from "react";
import { observer } from "mobx-react";
import projectsStore from "../../Stores/Projects/projects-db";
import ProjectCard from "./ProjectCard/project-card";
import theme from "../../Stores/Theme/theme";
import modalStore from "../../Stores/Modal/modal";

const destroyModal = () => {
  modalStore.isOpen = false;
  modalStore.component = null;
};

const assignModal = p => {
  modalStore.component = (
    <ProjectCard
      {...{
        theme,
        project: {
          title: p.title,
          summary: p.overview,
          tags: p.tags,
          img: p.image2
        },
        onClick: () => destroyModal(p),
        actionIcon: "colapse"
      }}
    ></ProjectCard>
  );
  modalStore.hasBackdrop = true;
  modalStore.isOpen = true;
};

const Projects = observer(() => {
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      {projectsStore.map((p, index) => (
        <ProjectCard
          key={`projext-${index}`}
          {...{
            theme,
            project: {
              title: p.title,
              summary: p.summary,
              tags: p.tags,
              img: p.image
            },
            onClick: () => assignModal(p),
            actionIcon: "expand"
          }}
        ></ProjectCard>
      ))}
    </div>
  );
});
export default Projects;
