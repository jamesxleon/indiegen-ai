export default function NavItem({ href, children, isActive, onClick }) {
  return (
    <li className="mb-6 last:mb-0">
      <a
        href={href}
        onClick={onClick}
        className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
          isActive ? 'bg-neon scale-125' : 'bg-inti/50 hover:bg-inti hover:scale-110'
        }`}
        aria-current={isActive ? 'page' : undefined}
      >
        <span className="sr-only">{children}</span>
      </a>
    </li>
  );
}
