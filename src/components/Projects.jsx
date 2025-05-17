import SectionTitle from './SectionTitle.jsx';
import ProjectCard from './ProjectCard.jsx';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section bg-gradient-to-b from-offwhite to-inti/10 snap-start">
      <div className="container">
        <SectionTitle subtitle="Things I've built">Projects</SectionTitle>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
