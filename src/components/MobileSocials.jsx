import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const MobileSocials = () => {
  return (
    <>
      <section className="h-16 w-full bg-gradient-to-b from-gray-700 to-black lg:hidden">
        <ul className="h-full flex justify-center items-center gap-x-6 text-gray-400">
          <li className="">
            <a
              className=""
              href="https://www.linkedin.com/in/similoluwa-ayodele-192032147/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="">
            <a className="https://github.com/UncleSims" href="" target="_blank">
              <FaGithub size={30} />
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://twitter.com/AyodeleSimmy_"
              target="_blank"
            >
              <AiOutlineTwitter size={30} />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default MobileSocials;
