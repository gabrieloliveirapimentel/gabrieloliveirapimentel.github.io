import { ProjectCard } from "../../components/project-card";
import { projects } from "../../data/data";

export function Projects() {
  return (
    <section className="max-w-[1168px] mx-auto space-y-4 sm:px-12 max-sm:px-6 ">
      <div className="text-center mb-12">
        <span className="text-rose-500 mb-2 font-['Inconsolata'] text-xl">
          Meu trabalho
        </span>
        <h2 className="text-2xl md:text-3xl mb-3">
          Veja meus projetos mais recentes
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
