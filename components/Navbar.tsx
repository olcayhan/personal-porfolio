export default function Navbar() {
  return (
    <div className="hidden md:block fixed top-0 w-full bg-neutral-50">
      <div className="flex flex-row justify-between items-center px-24 py-5">
        <h1 className="font-extrabold text-2xl">Olcay.tech</h1>
        <div className="flex flex-row items-center justify-center gap-6">
          <a className="font-bold text-lg" href="#home">
            Home
          </a>
          <a className="font-bold text-lg" href="#about">
            About
          </a>
          <a className="font-bold text-lg" href="#projects">
            Projects
          </a>
          <a className="font-bold text-lg" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
