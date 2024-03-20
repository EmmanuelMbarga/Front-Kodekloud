import { CardCaroussel } from "./cardCaroussel";
import LogoIcon from "./logoIcon";
const vmware =
  "https://assets-global.website-files.com/62a8969da1ab561666c8c408/642b9bd104ea37508d5e1ab8_Vmware2%40x.png";
const Microsof =
  "https://assets-global.website-files.com/62a8969da1ab561666c8c408/633ac4325eab0df0ae306e9a_Microsoft2%40x.webp";
const Dell =
  "https://assets-global.website-files.com/62a8969da1ab561666c8c408/633ac43237b87264c5e2428d_Dell.webp";
const Google =
  "https://assets-global.website-files.com/62a8969da1ab561666c8c408/633ac432328f56846eb4efab_Google2%40x.webp";
const apple =
  "https://assets-global.website-files.com/62a8969da1ab561666c8c408/633ac6139841f95436b84b0d_Apple.webp";
const pivara =
  "https://assets-global.website-files.com/62a8969da1ab561666c8c408/633ac4327b7cb7fdabcaa7ba_Pivotal.webp";
const amazon =
  "https://assets-global.website-files.com/62a8969da1ab561666c8c408/633ac4320a949572d8522690_Amazon.webp";

export const IconLogiciel = () => {
  return (
    <div className=" border-t w-[48rem] tablete:ml-0 tablete:w-[100%] tablete:flex-wrap portable:ml-0 portable:w-[28rem]">
      <h1 className="font-Poppins text-2xl p-4 font-semibold">
        our students work at...
      </h1>
      <div className="flex pb-6 pt-4 items-center petitPortable:flex-wrap portable:flex-wrap">
        <LogoIcon logo={vmware} />
        <LogoIcon logo={Microsof} />
        <LogoIcon logo={Dell} />
        <LogoIcon logo={Google} />
        <LogoIcon logo={apple} />
        <LogoIcon logo={pivara} />
        <LogoIcon logo={amazon} />
      </div>
      <DescriptionApp />
      <DescriptionApp2 />
    </div>
  );
};

const DescriptionApp = () => {
  return (
    <div className="border-y p-4 portable:w-[100%] portable:m-auto">
      <h1 className="font-Poppins font-semibold text-2xl">Description</h1>
      <p className="text-base my-6 text-gray-500">
        Welcome to the definitive guide to Github actions! This comprehensive
        course is designed to equip you with the knowledge and skills needed to
        harness the full potential og GitHub Actions for seambless automation,
        continuous integration, and deployment.
      </p>
      <button className="text-sky-400 uppercase font-Poppins font-semibold text-xs  tablete:hidden desktop:hidden ">
        read more
      </button>

      <div className="flex justify-between petitPortable:hidden portable:hidden">
        <span className="text-lg font-semibold font-Poppins text-gray-400">
          course sections:
        </span>
        <button className="text-sky-400 uppercase font-Poppins font-semibold text-xs">
          read more
        </button>
      </div>
    </div>
  );
};

const DescriptionApp2 = () => {
  return (
    <div className="border-b p-4">
      <h1 className="font-Poppins font-semibold text-2xl p-2">
        what our students say
      </h1>
      <div className="flex justify-between">
        <div className="block w-[36%] text-center portable:w-[100%]">
          <h1 className="text-2xl my-2 text-gray-700">Excellent</h1>
          <p className="w-[10rem] flex  m-auto">
            <img
              src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
              alt="imgSertif"
              className="w-[10rem]"
            />
          </p>
          <p className="text-sm text-gray-500">
            Based on <u>365 reviews</u>
          </p>
          <div className="flex justify-center py-2 items-center">
            <p>
              <img
                src="https://www.mrstarsky.com/wp-content/uploads/2021/10/trustpilot-2.svg"
                alt="truspilot"
                className="w-[18px] "
              />
            </p>
            <p className="uppercase font-semibold text-base font-Poppins">
              trustpilot
            </p>
          </div>
        </div>
        <div className="bg-white w-[64%] petitPortable:hidden portable:hidden ">
          <CardCaroussel/>
          <p className="text-sm font-thin">showing our favorite reviews</p>
        </div>
      </div>
    </div>
  );
};
