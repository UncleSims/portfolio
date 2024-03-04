import Trailerpoint from "../assets/portfolio/Trailerpoint.png";
import FitnessJunkie from "../assets/portfolio/FitnessJunkie.png";
import Birdiebox from "../assets/portfolio/birdiebox.jpeg";
import Konnected from "../assets/portfolio/konnected.jpeg";
import EniolaPortfolio from "../assets/portfolio/eniola-portfolio.jpeg";
import LolaPortfolio from "../assets/portfolio/lola-portfolio.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Konnected,
      href: "https://withkonnected.com/",
    },
    {
      id: 2,
      src: Birdiebox,
      href: "https://birdiebox.ai/",
    },
    {
      id: 3,
      src: LolaPortfolio,
      href: "#https://lolataiwo.live/",
    },
    {
      id: 4,
      src: EniolaPortfolio,
      href: "https://www.eniolabiola.com/",
    },
    {
      id: 5,
      src: Trailerpoint,
      href: "https://trailerpoint.netlify.app",
      code: "https://github.com/UncleSims/TrailerPoint",
    },
    {
      id: 6,
      src: FitnessJunkie,
      href: "https://fitnessjunkie.netlify.app/",
      code: "https://github.com/UncleSims/gym-project",
    },
  ];
  return (
    <section
      name="portfolio"
      className="bg-gradient-to-b min-h-screen from-black to-gray-800 text-white "
    >
      <section className="max-w-screen-lg mx-auto">
        <div className=" flex flex-col h-full justify-center py-[100px]">
          <div className="mx-5 pb-5 md:pb-8">
            <span className="text-xl md:text-3xl font-bold border-b-4 border-gray-500">
              Portfolio
            </span>
            <p className="pt-2.5 text-base md:text-lg md:pt-6  text-gray-400">
              Here are a couple of my works, feel free to check them out.
            </p>
          </div>
          <div className=" h-[55%] flex flex-col items-center gap-y-4 sm:h-2/4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
            {portfolios.map(({ id, src, href, code }) => (
              <div
                key={id}
                className="w-9/12 sm:w-[400px] h-1/2 sm:h-full shadow-md shadow-gray-600 rounded-lg"
                data-aos="zoom-in"
              >
                <img
                  className="h-[75%] w-full object-cover rounded-md duration-200 hover:scale-105"
                  src={src}
                  alt=" key={id}"
                />
                <div className="h-[25%] flex items-center justify-center">
                  <button className="w-1/2 sm:px-6 sm:py-3 m-4 duration-200 hover:scale-105">
                    <a href={href} target="_blank">
                      Demo
                    </a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={code} target="_blank">
                      Code
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
