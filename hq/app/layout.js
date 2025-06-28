import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import About from "./components/About";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Your Name | Portfolio",
  description: "A portfolio showcasing accessible, pixel-perfect digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex">
          <aside className="sidebar">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Huaqi Zhang</h1>
            {/* <p className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer</p> */}
            <About />
            
            <nav className="pt-8">
              <a href="#education" className="group flex items-center py-3 active">
                <span className="nav-indicator mr-4 h-px w-10 bg-slate-600 transition-all motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Education</span>
              </a>
              <a href="#experience" className="group flex items-center py-3 active">
                <span className="nav-indicator mr-4 h-px w-10 bg-slate-600 transition-all motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
              </a>
              <a href="#projects" className="group flex items-center py-3 active">
                <span className="nav-indicator mr-4 h-px w-10 bg-slate-600 transition-all motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
              </a>
            </nav>
          </aside>
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}