import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/next-js.svg";
import typescript from "../assets/typescript.svg";

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: reactImage,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: nextjs,
      title: "NEXTJS",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: typescript,
      title: "TYPESCRIPT",
      style: "shadow-sky-400",
    },
  ];
  return (
    <section
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <section className="max-w-screen-lg mx-auto py-[100px] flex flex-col justify-center w-full text-white">
        <div className="mt-4">
          <span className="text-xl md:text-3xl font-bold border-b-4 border-gray-500 inline">
            Experience
          </span>
          <p className="text-base md:text-lg pt-6 text-gray-400">
            These are some of the technologies i have worked with
          </p>
        </div>

        <section className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-6 px-12 sm:px-0 ">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              data-aos="zoom-in"
            >
              <img
                src={src}
                className="w-16 md:w-20 h-12 md:h-[120px] mx-auto"
                alt="HTML"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Experience;
