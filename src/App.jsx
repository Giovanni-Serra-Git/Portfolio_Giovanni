import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const projects = [
  {
    title: "fit gym website app",
    url: "https://web-app-gym.netlify.app/",
    description: "This demo project includes gym opening hours, promotions and an internal application where you can search for targeted exercises. The application was created by retrieving data through Rapid Api. For trying the application just go to the exercise section, then click on the *go to rapid api* button",
    img: "/gym.png",
  },
  {
    title: "restaurant design",
    url: "https://website-gericht.netlify.app/",
    description: "Restaurant Website with simple and clean design. The design was taken from UI8 website",
    img: "/gericht.png",
  },
  {
    title: "tic tac toe game",
    url: "https://game-app-tic-tac-toe.netlify.app/",
    description: "Tic Tac Toe Game where two players can challenge each other",
    img: "/tic-tac-toe.png",
  },
  {
    title: "imdb clone website app",
    url: "https://app-imdb-clone.netlify.app/",
    description: "A simple version of IMDB website. I created this demo in order to practice the tech stack I learned.Built with React, React Router, React Redux, Material UI, Styled Component",
    img: "/imdb.png",
  },
  {
    title: "pool builders website",
    url: "https://deapiscine.it/",
    description: "A website for pool builders. The site has an integrated feature with four different languages. I chose a simple yet functional design to represent what the company does",
    img: "/piscine.png",
  },
  {
    title: "beauty center website",
    url: "https://esteticaunoraperte.it/",
    description: "A beauty aesthetics website I created for a client. I primarily focused on an innovative design and aimed for light and eye-pleasing colors.",
    img: "/centro_estetico.png",
  },
]

function App() {
  return (
  <>
    <div className="min-h-screen px-[2rem] py-[3rem] flex flex-col text-white md:items-center md:flex-row">
      <div className="left-side-container md:flex-[60%]">
        <div className="intro flex flex-col gap-3 text-white">
          <p className="text-[3rem] font-bold roboto-white-italic text-[#d9d9d9]">Giovanni Serra</p>
          <p className="text-[1.1rem] capitalize roboto-white-italic font-bold highlight">front end developer</p>
          <p className="text-[1.1 rem] roboto-white-italic w-[50vh]">I build visually appealing websites that deliver a great user experience</p>
        </div>

        <nav className="mt-[4rem] text-white">
          <ul className="roboto-white-italic font-medium flex gap-2 my-[2rem]">
            <li className="cursor-pointer hover:highlight transition duration-300 ease-in-out"><a href="https://github.com/Giovanni-Serra-Git" target="_blank"><FaGithub size={"1.5rem"}/></a></li>
            <li className="cursor-pointer hover:highlight transition duration-300 ease-in-out"><a href="https://www.linkedin.com/in/giovanni-serra-609a84277/" target="_blank"><FaLinkedinIn size={"1.5rem"}/></a></li>
          </ul>
        </nav>
      </div>

      <div className="right-side-container md:flex-[40%]">
        <div className="about-me">
        <p className="text-[1.1rem] pt-[1rem]">I'm a front end developer eager to join a company in order to learn the job from experts.</p>
        <p className="text-[1.1rem] pt-[1rem]">My current knowledge is <span className="highlight">Html</span>, <span className="highlight">Css</span>, <span className="highlight">Javascript</span> and <span className="highlight">React</span>.</p>
        <p className="text-[1.1rem] pt-[1rem]">I also have basics knowledge of    <span className="highlight">Git</span>, <span className="highlight">React</span> <span className="highlight">Redux</span> - <span className="highlight">React Router</span>, and <span className="highlight">Tailwind Css</span></p>
        <p className="text-[1.1rem]">My goal is to build websites that are visually appealing and intuitive to navigate.</p>
        <p className="text-[1.1rem] pt-[1rem]">I use simple yet effective colors to create the structure and organization of the site.</p> 
        <p className="text-[1.1rem] pt-[1rem]">I always strive to improve the final result I deliver to users and pay close attention to how the site is represented.</p>  
        <p className="text-[1.1rem] pt-[1rem]">I would love the opportunity to join a team of developers where I can learn from the best, gaining insights into sophisticated web development and site-building techniques.</p>
        </div>
      </div>
    </div>
          <div className="projects flex w-[100%] flex-wrap gap-2 justify-center md:justify-around text-white">
            {projects.map((project,index) => {
              return (
                <div key={index} className="w-[90%] sm:w-[45%] flex flex-col gap-6 mt-[1rem]">
                  <p className="text-[1.5rem] text-center my-[1rem] uppercase font-bold highlight">{project.title}</p>
                  <a href={project.url} target="_blank">
                    <img src={project.img} alt={project.title} className="md:h-[160px] md:w-[320px] m-auto" />
                  </a>
                  <p className="md:text-center">{project.description}</p>  
              </div>
              )
            })}
          </div>
          <footer className="mt-[4rem] text-white text-[1.5rem] text-center">
            <p>Feel free to get in touch with me</p>
            <p className="highlight">giovanni.serra.web@gmail.com</p>
        </footer>
        </>
  )

}

export default App
