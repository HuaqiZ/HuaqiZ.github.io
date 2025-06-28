import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Educaiton from "./components/Education";

export default function Home() {
  return (
    <>
      {/* <section id="about" className="mb-10">
        <About />
      </section> */}

      <section id="education" className="mb-10">
        <Educaiton />
      </section>

      <section id="experience" className="mb-10">
        <Experience />
      </section>

      <section id="projects" className="mb-10">
        <Projects />
      </section>

      <footer className="mt-10 py-6 border-t border-gray-700">
        <div className="flex space-x-4">
          {/* Add social media icons/links */}
        </div>
      </footer>
    </>
  );
}