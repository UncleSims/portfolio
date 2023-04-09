import Trailerpoint from "../assets/portfolio/Trailerpoint.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Trailerpoint,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
   

   
  ];
  return (
    <section
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800  text-white md:h-screen flex justify-center items-center"
    >
      <section className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <span className="text-3xl font-bold border-b-4 border-gray-500">
            Portfolio
          </span>
          <p className="pt-6 text-gray-400">Here are a few of my works, feel free to check them out.</p>
        </div>

        <div className="h-2/5 grid sm:grid-cols-2 md:grid-cols-3 gap-8 cntent-center px-12  sm:px-0" >
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg" data-aos="flip-left">
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt=" key={id}"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
