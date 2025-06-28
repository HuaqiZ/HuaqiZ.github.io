import * as motion from "motion/react-client";

export default function Education() {
  return (
    <motion.div
      id="education"
      initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2.0,
        //   ease: [0.17, 0.67, 0.83, 0.67],
        //   delay: 0.0, // Title appears first
        }}
      className="py-24 max-w-2xl mx-auto rounded-lg p-6"
    >
      <motion.h2
         initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2.0,
        //   ease: [0.17, 0.67, 0.83, 0.67],
        //   delay: 0.0, // Title appears first
        }}
        className="text-2xl font-semibold mb-6 text-slate-200"
      >
        Education
      </motion.h2>
      <div className="bg-gray-700/80 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">SUNY at New Paltz</h2>
          <p className="text-sm">2018 - 2022</p>
        </div>
        <img
          src="/SUNY.png" // Replace with your logo path
          alt="IIIT Kurnool Logo"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div className="p-4 text-slate-300">
        <p className="font-medium mb-2">Bachelor of Science</p>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">⚡</span>
            Major in Computer Science
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">⚡</span>
            Minor in Art Studio
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">⚡</span>
            Mastered core courses in Operating Systems, Algorithms, and Web Application Development.
          </li>
        </ul>
      </div>
    </motion.div>
  );
}