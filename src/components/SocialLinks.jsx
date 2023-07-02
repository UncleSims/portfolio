import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  return (
    <section className="hidden lg:flex flex-col lg:transition duration-150 ease-in top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center rounded-tr-md w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-900">
          <a
            className="flex justify-between items-center w-full text-white "
            href="https://www.linkedin.com/in/similoluwa-ayodele-192032147/"
            target="_blank"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-900">
          <a
            className="flex justify-between items-center w-full rounded-tr-md text-white "
            href=""
            target="_blank"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-900">
          <a
            className="flex justify-between items-center w-full text-white "
            href="mailto:iamsimmyyodel@gmail.com"
            target="_blank"
          >
            Mail <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="flex justify-between items-center rounded-br-md w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-900">
          <a
            className="flex justify-between items-center w-full text-white "
            href="/AyodeleSimiloluwa.pdf"
            download="Ayodele Similoluwa"
            target="_blank"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialLinks;
