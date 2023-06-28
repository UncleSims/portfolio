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
            I am currently based in Abuja, Nigeria and working remotely. My
            approach to Front-end development is driven by a deep interest in
            problem-solving and research having transitioned into tech from Law.
            I believe in the effectiveness of collaboration in bringing ideas to
            life. I am consistently seeking opportunities and platforms to
            learn, grow and harness my skills to aid improvement, both
            personally and professionally.
          </p>
          <br />
          <p className="text-base md:text-lg text-gray-400" data-aos="fade-up">
            When I am not writing code, you can often find me at the gym in the
            evenings or catch me seeing my favourite shows on Netflix. I do my
            best to make out time to spend with my family and loved ones because
            that is equally as important.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
