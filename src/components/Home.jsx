import { useEffect, useState } from "react";
import Typed from "react-typed";
import Heroimg from "../assets/Heroimg.jpg";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import { Link } from "react-scroll";

const Home = () => {
  const [download, setDownload] = useState(false);

  const speak = () => {
    const synth = window.speechSynthesis;
    const text = "Hi there, I am Similoluwa Ayodele, A font-end web developer";
    const value = new SpeechSynthesisUtterance(text);
    value.rate = 2;

    useEffect(() => {
      synth.speak(value);
      speak();
    }, []);

    // synth.speak(value);
    // if (synth.speaking) {
    //     synth.cancel();
    //   }
  };

  return (
    <main
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
      // onClick={speak()}
    >
      <section className="max-w-screen-lg  flex flex-col justify-center h-full px-4 md:flex-row md:items-center lg:mx-auto">
        <div
          className="flex flex-row justify-center mt-10 md:ml-16 lg:ml-16"
          data-aos="fade-right"
        >
          <div className="flex flex-col justify-center items-start">
            <span className="block text-gray-100 py-4 ">Hi there,</span>
            <Typed
              className=" flex items-center md:text-4xl text-3xl font-bold text-[#e0a80d]"
              strings={["I am Simmy,", "A Front-End Web Developer."]}
              typeSpeed={120}
              backSpeed={160}
              loop
            />

            <p className="text-gray-400 my-6 max-w-md">
              I love to work on the front-end of web applications using
              Technologies like React, TailwindCSS amongst others.
            </p>
            <p className="text-gray-400 max-w-md">
              Please take a look around, see what i have been working on, and
              lets see what we can build together.
            </p>
            <div className="flex gap-3 my-3 ">
              <button className=" flex items-center gap-x-2 rounded-3xl border border-[#e0a80d] text-gray-400 w-fit px-6 py-3 my-2 hover:scale-105 duration-200">
                <Link to="portfolio" smooth duration={500}>
                  Portfolio
                </Link>

                <span>
                  <BsArrowRight />
                </span>
              </button>
              <button className="md:hidden flex items-center gap-x-2 rounded-3xl border border-white text-white  w-fit px-6 py-3 my-2 hover:scale-105 duration-200">
                <a
                  href="/AyodeleSimiloluwa_resume.pdf"
                  download="Ayodele Similoluwa"
                  target="_blank"
                  className="font-bold"
                >
                  Dowload Resume
                </a>

                <span>
                  <HiDownload />
                </span>
              </button>
            </div>
          </div>
          <div className="hidden md:block md:mt-16 lg:mt-0">
            <img
              src={Heroimg}
              alt="my profile"
              className="rounded-2xl mx-auto w-1/3 md:w-2/4"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
