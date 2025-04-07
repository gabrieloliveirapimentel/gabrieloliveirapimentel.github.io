import { Project } from "../data/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-lg p-4 bg-[#292C34] border-2 border-[#292C34] hover:border-[#878EA1]">
      <a
        className="flex flex-col gap-4"
        href={project.link ?? "#"}
        target="_blank"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <h3>{project.title}</h3>
          <p className="mb-1.5">{project.description}</p>
        </div>
      </a>
    </div>
  );
}
