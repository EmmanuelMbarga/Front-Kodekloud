const chevronDroit = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-4 h-4 text-gray-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export const CardSection1 = () => {
  return (
    <>
      <div className=" my-4 flex items-center desktop:w-[100%] desktop:[ml-0] tablette:w-[100%] tablete:ml-0 portable:w-[100%] portable:ml-0 portable:m-auto petitPortable:w-[100%] petitPortable:ml-0 petitPortable:m-auto ">
        <span className="font-Poppins text-sm text-gray-400">Courses</span>{" "}
        <span className="font-bold text-gray-400 text-lg"></span>
        {chevronDroit}{" "}
        <span className="text-sm font-Poppins">GitHub Actions</span>
      </div>

      <div className="flex my-10 items-center bg-gradient-to-r  from-blue-500 to-purple-500 rounded-3xl w-[49rem] tablete:mx-0 tablete:w-[100%] tablete:m-auto  portable:ml-0 portable:m-auto petitPortable:ml-0 petitPortable:w-[100%] petitPortable:m-auto">
        <div className="w-[45rem] p-10 ">
          <h3 className=" text-neutral-100 mb-8 w-[6rem] bg-white bg-opacity-[0.2] rounded-lg py-2 px-2 text-sm font-Inter font-medium">
            Automation
          </h3>
          <h1 className="text-white text-3xl font-Poppins  font-semibold">
            GitHub Actions
          </h1>
          <p className="font-Poppins text-gray-300 text-base my-4 ">
            Unlock the potential of seambless automation and deployment: Master
            GitHup Actions with our comprehensive course, empowerind you to
            streamline workflows, ensure error-free releases, and revolutionize
            your software development practices
          </p>
          <div className="flex items-center mb-8">
            <span className="text-white text-xl font-Inter font-medium">
              Excellent
            </span>
            <span className="w-[6rem] mx-4">
              <img
                src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
                alt="imgSertif"
              />
            </span>
            <span className="text-white font-medium text-sm font-Poppins exception1:hidden ">
              365 reviews on{" "}
            </span>
            <div className="w-[2rem] flex items-center mx-4 exception1:hidden ">
              <img
                src="https://www.mrstarsky.com/wp-content/uploads/2021/10/trustpilot-2.svg"
                alt="truspilot"
                className="w-[18px] "
              />
              <span className="text-white font-medium text-sm font-Poppins">
                Truspilot
              </span>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="bg-gradient-to-r from-orange-500 to-purple-500 w-14 h-14 rounded-full text-center"></div>
            <div className="ml-4">
              <h1 className=" text-white text-lg font-medium font-Poppins">
                Barahalikar siddharth
              </h1>
              <p className="text-gray-300">Technical Architect and Educator</p>
            </div>
          </div>
        </div>
        <div className="w-[20rem] p-4">
          <img
            src="https://assets-global.website-files.com/62a8969da1ab56329dc8c41e/6560c4bc56c61861f36dfc6a_Github%20Actions%20Large-p-500.png"
            alt="logoPng"
          />
        </div>
      </div>
    </>
  );
};
