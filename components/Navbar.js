import Link from "next/link";
export default function Navbar() {
    return (
      <nav className="bg-black text-white p-4">
        <ul className="flex gap-4 justify-center">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/Ccontrol">Centro de Control</Link></li>
          <li><Link href="/documentation">Documentación</Link></li>
          {/*</ul>*<li*><Link href="/gallery">Galería</Link></li*/}
          <li><Link href="/about">Acerca de</Link></li>
        </ul>
      </nav>
    );
  }