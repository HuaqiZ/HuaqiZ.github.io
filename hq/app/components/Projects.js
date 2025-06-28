import * as motion from "motion/react-client";

export default function Projects() {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 100 }} // Increased from 20 to 100 for larger amplitude
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 2.0,
        ease: [0.17, 0.67, 0.83, 0.67],
        delay: 0.3, // Slight delay for staggered effect
      }}
      className="py-24"
    >
      
    <a href="https://profile.theepochtimes.com/" className="flex flex-col rounded-lg md:flex-row md:max-w-xl items-end hover:bg-gray-700/30" target="_blank" rel="noopener noreferrer">
        <img src="/customerportal.jpg" className="object-cover w-[200px] rounded" alt="Logo" />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-slate-200">Customer Portal</h5>
            <p className="mt-2 text-sm text-slate-400">A customer-facing web app for 1M+ subscribers to manage personal info, biling, and subscriptions. </p>
        </div>
    </a>

     <div className="flex flex-col rounded-lg md:flex-row md:max-w-xl items-end hover:bg-gray-700/30">
        <img src="/social.jpg" className="object-cover w-[200px] rounded" alt="Logo" />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-slate-200">Social Platform with CMS</h5>
            <p className="mt-2 text-sm text-slate-400">Built an interactive content-sharing platform with CMS-level account management for offical users. </p>
        </div>
    </div>
    </motion.div>
  );
}