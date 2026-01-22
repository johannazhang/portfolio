import { useParams } from "react-router-dom";
import styles from "./Project.module.scss";
import { PROJECTS } from "../../../../data/projects";
import AIAlgorithms from "./AIAlgorithms";
import TextAdventure from "./TextAdventure";
import Utern from "./Utern";
import AliceMazeSolver from "./AliceMazeSolver";
import Centipede from "./Centipede";
import PortfolioWebsite from "./PortfolioWebsite";
import ParamedicChiefs from "./ParamedicChiefs";
import Metromate from "./metromate/Metromate";
import Back from "./back/Back";
import Giftify from "./giftify/Giftify";

const PROJECT_COMPONENTS = {
  "ai-algorithms": AIAlgorithms,
  metromate: Metromate,
  giftify: Giftify,
  johannazhang: PortfolioWebsite,
  "text-adventure": TextAdventure,
  utern: Utern,
  "paramedic-chiefs-of-canada": ParamedicChiefs,
  "alice-maze-solver": AliceMazeSolver,
  centipede: Centipede,
};

const Project = () => {
  const { slug } = useParams();
  const project = PROJECTS.find((project) => project.slug === slug);
  const ProjectComponent = PROJECT_COMPONENTS[slug];
  if (!project || !ProjectComponent) return <p>not found</p>;

  let cover;
  const projectImages = project.projectImages;
  if (projectImages?.length > 0) {
    cover = projectImages.map((imageSrc) => (
      <img key={imageSrc} src={imageSrc} alt={project.title} />
    ));
  } else {
    cover = <img src={project.thumbnailSrc} alt={project.title} />;
  }

  return (
    <section className={styles.project}>
      <Back />
      <h1>{project.title}</h1>
      <span>{project.subtitle}</span>
      {cover}
      <ProjectComponent />
      {project.link && (
        <a href={project.link} target="_blank">
          Link to Repo
        </a>
      )}
    </section>
  );
};

export default Project;
