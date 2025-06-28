import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur bg-opacity-80 shadow-md">
      <nav className="flex justify-between items-center py-4 px-6 md:px-24">
        <div className="font-bold text-lg text-gray-900">Zihao</div>
        <div className="space-x-6 text-sm">
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
        </div>
      </nav>
    </header>
  );
}