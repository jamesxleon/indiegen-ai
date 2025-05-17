import SectionTitle from './SectionTitle.jsx';

export default function Craft({ skills }) {
  return (
    <section id="craft" className="section bg-offwhite snap-start">
      <div className="container">
        <SectionTitle subtitle="Tools & techniques I practice">Craft</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow transition-transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <ul className="space-y-1 text-graphite/80 text-sm">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
