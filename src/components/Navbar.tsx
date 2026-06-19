export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 mix-blend-difference text-white">
      <div className="text-sm font-semibold tracking-wider uppercase">NOVA DENTAL</div>
      <ul className="flex items-center gap-8 text-sm font-medium">
        <li><a href="#services" className="hover:opacity-70 transition-opacity">Services</a></li>
        <li><a href="#team" className="hover:opacity-70 transition-opacity">Team</a></li>
        <li><a href="#blog" className="hover:opacity-70 transition-opacity">Blog</a></li>
        <li><a href="#testimonials" className="hover:opacity-70 transition-opacity">Testimonials</a></li>
        <li><a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a></li>
      </ul>
    </nav>
  );
}
