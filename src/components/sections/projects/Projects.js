import styles from "./Projects.module.scss";
import ProjectCard from "./project-card/ProjectCard";
import { PROJECTS } from "../../../data/projects";
import Filter from "./filter/Filter";
import { Outlet, useLocation, useParams } from "react-router-dom";

const PATH_TO_CATEGORY = {
  eng: "Engineering",
  design: "Design",
};

const Projects = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();

  if (slug) {
    return <Outlet />;
  }

  const projectFilters = [
    { name: "All", link: "/portfolio", exact: true },
    { name: "Eng", link: "./eng" },
    { name: "Design", link: "./design" },
  ];

  const categoryPath = Object.keys(PATH_TO_CATEGORY).find((key) =>
    pathname.includes(`/${key}`),
  );
  const currentCategory = PATH_TO_CATEGORY[categoryPath] || "All";
  const filteredProjects =
    currentCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === currentCategory);

  return (
    <section className={styles.projects}>
      <h1>
        portfolio<span className="accent-blue">/</span>projects
      </h1>
      <Filter filters={projectFilters} />
      <div className={styles.projectCards}>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            subtitle={project.subtitle}
            thumbnailSrc={project.thumbnailSrc}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
