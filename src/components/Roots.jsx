export default function Roots() {
  const timeline = [
    { year: '1998', title: 'The Beginning', description: 'Born in the heart of the Andes, immersed in Kichwa traditions and a deep connection to nature.', icon: '👶' },
    { year: '2015', title: 'First Lines of Code', description: 'Discovered the power of programming and started building simple applications.', icon: '💻' },
    { year: '2020', title: 'University Graduate', description: 'Earned a degree in Computer Science with honors, focusing on AI and machine learning.', icon: '🎓' },
    { year: '2023', title: 'First Startup', description: 'Co-founded a tech startup focused on sustainable solutions for local communities.', icon: '🚀' },
    { year: '2025', title: 'Present Day', description: 'Building the future of AI while staying true to my roots and values.', icon: '🌱' },
  ];

  return (
    <section id="roots" className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-20 bg-gradient-to-b from-offwhite to-inti/10 snap-start">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-display text-graphite mb-12 text-center">
          My <span className="text-inti">Journey</span>
        </h2>
        <div className="relative before:absolute before:left-1/2 before:h-full before:w-1 before:bg-gradient-to-b before:from-neon before:to-inti before:transform before:-translate-x-1/2">
          {timeline.map((item, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'pl-16 text-right' : 'ml-auto pr-16 text-left'}`}>
              <div className="p-6 bg-white rounded-xl shadow-md relative">
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-inti rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <time className="text-neon font-cond text-lg tracking-wider">{item.year}</time>
                <h3 className="text-xl font-semibold text-graphite mt-1">{item.title}</h3>
                <p className="text-graphite/80 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
