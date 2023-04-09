import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
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
  ];
  return (
    <section
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <section className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <span className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </span>
          <p className="pt-6">
            These are some of the technologies i have worked with
          </p>
        </div>

        <section className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:PX-0 ">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              data-aos="zoom-in"
            >
              <img src={src} className="w-20 mx-auto" alt="HTML" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Experience;
