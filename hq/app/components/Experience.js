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
              Frontend Developer
            </h3>
              <ul className="mt-2 text-sm text-slate-400 list-disc ml-2">
                <li>
                Contribute to the redesign and development of a customer portal serving 1M+ users using <span className="font-bold text-slate-200">TypeScript</span>, <span className="font-bold text-slate-200">React</span>, <span className="font-bold text-slate-200">Redux</span>, and <span className="font-bold text-slate-200">Next.js</span>; helped improve login reliability and streamlined account workflows based on user feedback.
                </li>
                <li>
                  Implemented a responsive social interaction platform using <span className="font-bold text-slate-200">React</span> and <span className="font-bold text-slate-200">Tailwind CSS</span>; created a custom <span className="font-bold text-slate-200">Strapi</span> API endpoint to automate account management for verified users, reducing manual admin work by 60%.
                </li>
                <li>
                  Developed a modular configuration tool for paywall and content rules using <span className="font-bold text-slate-200">React</span> and <span className="font-bold text-slate-200">Redux</span>; replaced a legacy system, improving campaign setup efficiency for the marketing team from hours to under 30 minutes.
                </li>
                <li>
                  Built interactive UI components with real-time validation, dynamic autocomplete, and responsive layouts to support seamless user experiences.
                </li>
                <li>
                  Collaborated with UI/UX designers to translate mockups into accessible, high-performance web interfaces across browsers and screen sizes.
                </li>
                <li>
                  Diagnosed and fixed production bugs across core features; introduced reusable code patterns and improved maintainability through <span className="font-bold text-slate-200">ESLint</span> and component refactors.
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
                Collaborated with frontend developers to enhance UI components and implement layout updates based on design specifications using <span className="font-bold text-slate-200">React</span>, <span className="font-bold text-slate-200">TypeScript</span>, and <span className="font-bold text-slate-200">CSS</span>.
                </li>
                <li>
                  Identified and resolved user-facing bugs across key views, improving UI responsiveness and reducing visual inconsistencies in production builds.
                </li>
                <li>
                  Contributed to a video management platform by building features that supported file uploads, preview, and metadata handling, gaining hands-on experience with asynchronous operations and UI state synchronization.
                </li>
                <li>
                  Gained practical experience working in an agile team environment, consistently meeting sprint goals and effectively communicating progress during daily stand-ups.
                </li>
              </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
