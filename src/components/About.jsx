import Heroimg from "../assets/Heroimg.jpg";

const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 lg:mx-auto flex flex-col justify-center w-full h-full">
        <div className="w-full mb-6">
          <div className="w-full pb-4 ">
            <span className="text-xl md:text-3xl font-bold inline border-b-4 border-gray-500">
              About
            </span>
            <div className="flex mt-6 justify-center transiton duration-700 ease-in md:hidden">
              <div className="w-1/4  ">
                <img
                  src={Heroimg}
                  alt="my profile"
                  className="rounded-2xl w-full object-cover"
                  data-aos="fade-down-right"
                />
              </div>
            </div>
          </div>
          <p
            className="text-base md:text-lg mt-4 text-gray-400"
            data-aos="fade-up"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam in
            velit quae modi optio, nesciunt corporis? Officia tempore deserunt
            harum eligendi numquam necessitatibus, repudiandae expedita quaerat
            dolorum consectetur laborum? Cupiditate.
          </p>
          <br />
          <p className="text-base md:text-lg text-gray-400" data-aos="fade-up">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            architecto est suscipit tenetur a temporibus voluptate totam labore
            maiores vero possimus deserunt, iste alias quos qui nemo excepturi
            sed. Laborum?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
