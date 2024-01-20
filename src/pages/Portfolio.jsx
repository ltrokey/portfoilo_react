import ProjectCard from "../components/UI/project/projectCard";
import { projectData } from "../components/UI/project/projectData";

export default function Portfolio() {
  return (
    <div className="container">
      <h2>Portfolio</h2>

      <div className="row card-container">
        {projectData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
