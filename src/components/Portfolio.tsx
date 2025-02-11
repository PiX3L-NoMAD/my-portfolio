import { Card, CardContent } from "./ui/Card";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiPostgresql } from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 text-gray-900 flex flex-col items-center p-6">
      <header className="w-full max-w-xl text-center py-8">
        <div className="flex justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQFCJWN76DTxcg/profile-displayphoto-shrink_800_800/B4EZPKyYbsGQAc-/0/1734274025753?e=1744243200&v=beta&t=PkEWcSIRW_lCtbJr9999tzXCUj9sExxX4EqJrDi4ZlQ"
            alt="Janilee Svaerdstaal"
            className="w-32 h-32 rounded-full border-4 border-pink-600"
          />
        </div>
        <h1 className="text-4xl font-bold text-pink-600">Janilee Svaerdstaal</h1>
        <p className="text-lg text-gray-700">PERN Stack Developer | JavaScript & TypeScript | React & Node.js | Turning Complex Problems into Seamless Solutions</p>
      </header>
      
      <section className="w-full max-w-4xl grid grid-cols-1 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-pink-600">About Me</h2>
            <p className="mt-2 text-gray-700">
            I’m a JavaScript/TypeScript & React developer with a background in the arts, bringing visual storytelling and creative problem-solving to my code. Recently, I’ve been expanding into full-stack development and test-driven practices at Northcoders, refining my ability to write clean, expressive, and maintainable code while collaborating in an Agile environment.
            <br /> <br />
            My strengths include attention to detail, persistence in problem-solving, and a keen artistic eye, which help me craft intuitive and engaging user experiences. I’m looking for a role where I can combine my creativity, curiosity, and technical skills to contribute to inspiring projects.
            </p>
          </CardContent>
        </Card>
      </section>
        
        <section className="w-full max-w-4xl grid grid-cols-1 gap-6 mt-6">
  <Card>
    <CardContent className="p-6">
      <h2 className="text-2xl font-semibold text-pink-600">Projects</h2>
      <ul className="mt-2 text-gray-700">
        <li>
          <strong>✨ NC News API</strong> - A news aggregation site with social functions and user accounts (backend).
          <br />
          Built with JS, Express, Vite, PostgreSQL. Hosted on Render and Supabase.
          <br />
          <a href="https://github.com/PiX3L-NoMAD/nc_news_API" target="_blank" className="text-pink-600 hover:text-pink-800">GitHub Repo</a> | 
          <a href="https://janilees-northcoders-project.onrender.com/api" target="_blank" className="text-pink-600 hover:text-pink-800 ml-1">Deployed API Endpoint</a>
        </li>
        <li className="mt-4">
          <strong>🌸 NC News Web App</strong> - The frontend version of NC News API, using React and Tailwind.
          <br />
          <a href="https://github.com/PiX3L-NoMAD/nc_news_react" target="_blank" className="text-pink-600 hover:text-pink-800">GitHub Repo</a> | 
          <a href="https://janilees-nc-news.netlify.app" target="_blank" className="text-pink-600 hover:text-pink-800 ml-1">Deployed Web App</a>
        </li>
        <li className="mt-4">
          <strong>💻 Law-Vely</strong> - An app making UK legislation accessible and fun, integrating OpenAI for summaries, and Firebase for databasing.
          <br />
          Built with TypeScript, React, Tailwind. Hosted on Netlify and Render.
          <br />
          <a href="https://github.com/ilyasbaggelaar/Law-Vely" target="_blank" className="text-pink-600 hover:text-pink-800">GitHub Repo</a> | 
          <a href="https://law-vely.onrender.com/api/legislationsummaries" target="_blank" className="text-pink-600 hover:text-pink-800 ml-1">Backend API</a> | 
          <a href="https://law-vely.netlify.app/" target="_blank" className="text-pink-600 hover:text-pink-800 ml-1">Deployed Web App</a>
        </li>
      </ul>
    </CardContent>
  </Card>
</section>

     {/* Tech Stack Section with Neon Animation */}
     <section className="w-full max-w-4xl grid grid-cols-1 gap-6 mt-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-pink-600">Tech Stack</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mt-4 gap-6">
              <div className="relative group flex justify-center items-center p-4 bg-black text-pink-600 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="text-pink-600 hover:text-pink-400">
                  <FaJs size={40} />
                </a>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">JavaScript</span>
              </div>

              <div className="relative group flex justify-center items-center p-4 bg-black text-blue-500 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://www.typescriptlang.org/" target="_blank" className="text-blue-500 hover:text-blue-400">
                  <SiTypescript size={40} />
                </a>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">TypeScript</span>
              </div>

              <div className="relative group flex justify-center items-center p-4 bg-black text-blue-400 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://reactjs.org/" target="_blank" className="text-blue-400 hover:text-blue-300">
                  <FaReact size={40} />
                </a>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">React</span>
              </div>

              <div className="relative group flex justify-center items-center p-4 bg-black text-green-500 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://nodejs.org/" target="_blank" className="text-green-500 hover:text-green-400">
                  <FaNodeJs size={40} />
                </a>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Node.js</span>
              </div>

              <div className="relative group flex justify-center items-center p-4 bg-black text-yellow-500 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://expressjs.com/" target="_blank" className="text-yellow-500 hover:text-yellow-400">
                  <SiExpress size={40} />
                </a>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Express.js</span>
              </div>

              <div className="relative group flex justify-center items-center p-4 bg-black text-purple-600 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://tailwindcss.com/" target="_blank" className="text-purple-600 hover:text-purple-400">
                  <SiTailwindcss size={40} />
                </a>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Tailwind CSS</span>
              </div>

              <div className="relative group flex justify-center items-center p-4 bg-black text-blue-500 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://www.postgresql.org/" target="_blank" className="text-blue-500 hover:text-blue-400">
                  <SiPostgresql size={40} />
                </a>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">PostgreSQL</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="w-full max-w-4xl mt-6 text-center">
        <h2 className="text-2xl font-semibold text-pink-600">Contact Me</h2>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/PiX3L-NoMAD" target="_blank" className="text-gray-800 hover:text-pink-600">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/janilee-svaerdstaal" target="_blank" className="text-gray-800 hover:text-pink-600">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:janileesvardstal@gmail.com" className="text-gray-800 hover:text-pink-600">
            <FaEnvelope size={30} />
          </a>
        </div>
      </section>
    </div>
  );
}