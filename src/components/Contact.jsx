import MobileSocials from "./MobileSocials";
const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-700 p-4 text-white"
    >
      <section className="flex flex-col px-4 pt-16 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8" data-aos="zoom-out-up">
          <span className="text-3xl font-bold inline border-b-4 border-gray-500 ">
            Contact
          </span>
          <p className="py-4 font-bold text-gray-200">Let's Connect!</p>
          <p className="text-gray-200 text-sm">
            You can email me at:{" "}
            <a
              className="text-gray-200 text-sm"
              href="mailto:iamsimmyyodel@gmail.com"
              target="_blank"
            >
              iamsimmyyodel@gmail.com
            </a>{" "}
          </p>
          <p className="pt-3 text-gray-200 text-sm">
            Or send me a quick message here:
          </p>
        </div>

        <div className="flex justify-center items-center" data-aos="zoom-out-up">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-gray-700 bg-gradient-to-b from-gray-200 to-[#e0a80d] px-6 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">
              Send Message
            </button>
          </form>
        </div>
        {/* <MobileSocials/> */}
      </section>
    </section>
  );
};

export default Contact;
