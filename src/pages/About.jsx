const About = () => {
  return (
    <section className="flex flex-row flex-wrap justify-between w-full overflow-hidden text-[#444B55] dark:text-[#ffffff]">
      <div className="flex justify-between flex-col lg:flex-row xl:flex-row items-center w-full py-10 px-10 md:px-0 lg:px-0 xl:px-0">
        <div className="w-full h-full md:py-10 lg:py-10 xl:py-10 md:pl-32 lg:pl-32 xl:pl-32">
          <div>
            <h2 className="text-[34px] font-bold">Visi Kami</h2>
            <p className="pl-6 text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <div className="mt-7">
            <h2 className="text-[34px] font-bold">Misi Kami</h2>
            <ul className="list-disc text-justify pl-6 text-[20px]">
              <li className="py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li className="py-2">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </li>
              <li className="py-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </li>
              <li className="py-2">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-full md:flex lg:flex xl:flex items-center flex-col justify-start p-2 md:p-10 lg:p-10 xl:p-10">
          <img
            src="/images/vision.png"
            alt="PaDi UMKM Team"
            className="rounded-lg shadow-xl w-full lg:w-[440px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
