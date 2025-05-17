import SectionTitle from './SectionTitle.jsx';

export default function Contact() {
  return (
    <section id="contact" className="section bg-offwhite snap-start">
      <div className="container max-w-xl text-center">
        <SectionTitle subtitle="Let's build something together">Contact</SectionTitle>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="name">Name</label>
            <input id="name" type="text" className="w-full rounded-md border-gray-300" />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="message">Message</label>
            <textarea id="message" rows="4" className="w-full rounded-md border-gray-300" />
          </div>
          <button type="submit" className="btn btn-primary">Initiate Pachakutik</button>
        </form>
        <p className="mt-6 text-sm text-graphite/70">
          📧 james@urkulabs.com
        </p>
      </div>
    </section>
  );
}
