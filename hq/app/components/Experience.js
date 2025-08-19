import * as motion from "motion/react-client";

export default function Experience() {
  return (
    <motion.div
      id="experience"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.5 }}
      className="py-24"
    >
      <motion.div
        variants={{
          hidden: {},
          visible: {},
        }}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }} // 0.3s delay between children
      >
        <motion.h2
          variants={{
            hidden: { x: '100vw', opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 2.0, ease: [0.17, 0.67, 0.83, 0.67] }} // Increased to 2.0 seconds
          className="text-2xl font-semibold mb-6 text-slate-200"
        >
          Experience
        </motion.h2>
        <motion.div
          variants={{
            hidden: { x: '100vw', opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 2.0, ease: [0.17, 0.67, 0.83, 0.67] }} // Increased to 2.0 seconds
          className="space-y-6" // Vertical spacing between cards
        >
          <motion.div
            whileHover={{ scale: 1.1, backgroundColor: '#1F2A44' }} // Darker hover with scale
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="block max-w-lg p-6 bg-transparent rounded-lg hover:bg-gray-700/30 border border-gray-200 shadow-sm"
          >
            <h3 className="font-medium mb-2 text-xl tracking-tight text-slate-200">
              Software Developer
            </h3>
              <ul className="mt-2 text-sm text-slate-400 list-disc ml-2">
                <li>
                  Implemented core features for a customer portal serving <span className="font-bold text-slate-200">1M+ users</span>, replacing a legacy <span className="font-bold text-slate-200">WordPress</span>-based system. Reduced <span className="font-bold text-slate-200">page load times by ~60%</span> and log-in delays by several seconds, improving access reliability through <span className="font-bold text-slate-200">React</span>-based optimizations and user feedback-driven enhancements.
                </li>
                <li>
                  Built responsive UI components for a social interaction platform using <span className="font-bold text-slate-200">React, TypeScript, Next.js, and Tailwind CSS</span>; integrated custom API endpoints into <span className="font-bold text-slate-200">Strapi CMS</span> to manage verified user accounts and streamline publishing workflows.
                </li>
                <li>
                  Enabled a <span className="font-bold text-slate-200">10–15 person marketing team</span> to reduce setup time for paywall-related campaigns from <span className="font-bold text-slate-200">hours</span> to <span className="font-bold text-slate-200">less than 30 minutes</span> by replacing a legacy tool with a streamlined configuration interface built in <span className="font-bold text-slate-200">React</span> and <span className="font-bold text-slate-200">Redux</span>.
                </li>
                <li>
                  Created interactive UI components with <span className="font-bold text-slate-200">real-time validation</span> using custom logic and <span className="font-bold text-slate-200">React’s useEffect</span>, enhancing form responsiveness and input accuracy. Utilized <span className="font-bold text-slate-200">semantic HTML</span> and ensured basic <span className="font-bold text-slate-200">accessibility standards</span> (e.g., keyboard navigation, screen-reader labels) in customer-facing UIs.
                </li>
                <li>
                  Translated <span className="font-bold text-slate-200">Figma</span> mockups into accessible web pages and resolved production bugs, improving maintainability through reusable patterns and <span className="font-bold text-slate-200">ESLint</span> rules.
                </li>
                <li>
                  Conducted <span className="font-bold text-slate-200">Postman</span>-based API testing and manual validation to ensure authentication and subscription reliability across environments.
                </li>
              </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, backgroundColor: '#1F2A44' }} // Darker hover with scale
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="block max-w-lg p-6 bg-transparent rounded-lg hover:bg-gray-700/30 border border-gray-200 shadow-sm"
          >
            <h3 className="font-medium mb-2 text-xl tracking-tight text-slate-200">
              Software Engineer Intern
            </h3>
            <ul className="mt-2 text-sm text-slate-400 list-disc ml-2">
                <li>
                  Updated UI layouts and interface components using <span className="font-bold text-slate-200">React</span>, <span className="font-bold text-slate-200">TypeScript</span>, and <span className="font-bold text-slate-200">CSS</span>, ensuring alignment with provided design specifications.
                </li>
                <li>
                  Contributed to a <span className="font-bold text-slate-200">React</span>-based video management tool by adding minor features and UI enhancements, working within established code structures to support <span className="font-bold text-slate-200">upload</span> and <span className="font-bold text-slate-200">preview functionality</span>.
                </li>
                <li>
                  Improved interface consistency by resolving <span className="font-bold text-slate-200">layout bugs</span> and refining interactive behavior across key views, adhering to internal styling and logic conventions.
                </li>
              </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
