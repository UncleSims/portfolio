import Trailerpoint from "../assets/portfolio/Trailerpoint.png";
import FitnessJunkie from "../assets/portfolio/FitnessJunkie.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Trailerpoint,
      href: "https://trailerpoint.netlify.app",
      code: "https://github.com/UncleSims/TrailerPoint",
    },
    {
      id: 2,
      src: FitnessJunkie,
      href: "https://fitnessjunkie.netlify.app/",
      code: "https://github.com/UncleSims/gym-project",
    },
    // {
    //   id: 3,
    //   src: navbar,
    // },
  ];
  return (
    <section
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 h-screen text-white "
    >
      <div className="flex flex-col w-screen h-full justify-center">
        <div className="mx-10 pb-5 md:pb-8 lg:ml-44">
          <span className="text-xl md:text-3xl font-bold border-b-4 border-gray-500">
            Portfolio
          </span>
          <p className="pt-2.5 text-sm md:text-lg md:pt-6  text-gray-400">
            Here are a few of my works, feel free to check them out.
          </p>
        </div>
        <div className=" h-[55%] w-screen flex flex-col items-center gap-y-4 sm:h-2/4 sm:flex sm:flex-row sm:justify-center sm:gap-x-6">
          {portfolios.map(({ id, src, href, code }) => (
            <div
              key={id}
              className="w-9/12 sm:w-[35%] h-1/2 sm:h-full shadow-md shadow-gray-600 rounded-lg"
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
  );
};

export default Portfolio;
