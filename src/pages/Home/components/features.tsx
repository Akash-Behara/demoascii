import Feat1Png from "../../../assets/feat-1.png";
import Feat2Png from "../../../assets/feat-2.png";
import Feat3Png from "../../../assets/feat-3.png";
import Feat4Png from "../../../assets/feat-4.png";

const Features = () => {
  return (
    <div className="flex flex-col items-center h-full w-full justify-center xl:min-h-[80svh]">
      {/* <div className="max-w-[1200px] w-full">
        <div className="md:grid grid-cols-4 mx-10 md:mx-0">
          <div className="col-span-1 row-span-1">
            <p className="flex items-end text-[230px] font-aceattorney text-outline-white">
              01.
            </p>
          </div>
          <div className="col-span-3 md:ml-10">
            <div className="md:mt-16 relative bg-gradient-to-b from-[#3a3a3a] via-[#989898] to-white bg-clip-text text-transparent">
              <p className="text-[24px]">studio</p>
              <p className="text-[24px]">international</p>
              <p className="text-[24px]">harbour house</p>
              <p className="text-[24px]">populo</p>
              <p className="text-[40px]">Hikarily network</p>
            </div>
            <div className="mt-10 md:mt-40">
              <div className="flex justify-between items-start flex-wrap border-t-[0.8px] border-[#BFBFBF] pt-6">
                <div>
                  <p className="text-xl font-protomonoreg">IMPORT YRE</p>
                </div>
                <div>
                  <p className="md:w-[470px] text-sm md:text-end font-inter mt-2 md:mt-0">
                    Import all your Calendly or Hubspot configurations with just
                    1 click, and enjoy a frictionless scheduling experience
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-start flex-wrap mt-14 border-t-[0.8px] border-[#BFBFBF] pt-6">
                <div>
                  <p className="text-xl font-protomonoreg">IMPORT YRE</p>
                </div>
                <div>
                  <p className="md:w-[470px] text-sm md:text-end font-inter mt-2 md:mt-0">
                    Import all your Calendly or Hubspot configurations with just
                    1 click, and enjoy a frictionless scheduling lemcal has been
                    a game-changer, allowing me to book meetings on
                    autopilot.experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-4 mt-40 md:mt-52 border-t mx-10 md:mx-0">
          <div className="col-span-1">
            <p className="flex items-end text-[230px] font-aceattorney text-outline-white">
              02.
            </p>
          </div>
          <div className="col-span-3 md:ml-10 mb-40">
            <div className="md:mt-36">
              <p className="text-[60px] font-protomonoreg border-b-[0.8px] border-[#BFBFBF]">
                Abstract
              </p>
            </div>
            <div className="grid grid-cols-6 mt-10">
              <div className="col-span-4">
                <p className="text-lg font-aceattorney max-w-[240px] md:max-w-[500px] indent-10 leading-6">
                  Import all your Calendly or Hubspot configurations with just 1
                  click, and enjoy a frictionless scheduling lemcal has been a
                  game-changer, allowing me to book meetings on
                  autopilot.experience and enjoy a frictionless scheduling
                  lemcal has been a game-changer, allowing me to book meetings
                  on
                </p>
              </div>
              <div className="col-span-2 flex flex-col items-end">
                <button className="border-[0.5px] border-[#CFCFCF] w-[170px] h-[30px] mb-3 flex justify-center items-center rounded-md text-sm font-protomonoreg">
                  REybbiojh
                </button>
                <div>
                  <p className="text-xs font-inter text-end">
                    Import all your Calendly or Hubspot configurations with just
                    1 click, and enjoy a frictionless scheduling experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="w-full">
        <WhiteStrips />
      </div> */}
      {/* 3RD */}
      <div className="bg-white w-full flex justify-center pb-40 px-10">
        <div className="max-w-[1200px] w-full">
          <div>
            <p className="flex flex-wrap items-end text-[230px] font-aceattorney">
              <span className="text-outline-black">01.</span>
              <span className="text-[64px] font-protomonoreg -translate-y-20 md:ml-10 text-black">
                BLOGS
              </span>
            </p>
          </div>
          <div className="flex flex-wrap xl:flex-nowrap justify-center md:justify-normal items-center gap-4 text-black">
            {features?.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-full h-full">
                  <img
                    src={feature.img}
                    alt={`Feature ${index + 1}`}
                    className="w-[301px] h-[300px]"
                  />
                  <div className="absolute -top-4 left-0 bg-[#ce2f2f] mt-4 z-50"></div>
                </div>
                <div className="mt-4 flex flex-col gap-2 h-full">
                  <div className="text-sm">{feature.title}</div>
                  <div className="w-[290px] text-sm font-inter">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

const features = [
  {
    img: Feat1Png,
    title: "Do the things right way",
    description:
      "Import all your calendly or huspot Configurations with just 1 click",
  },
  {
    img: Feat2Png,
    title: "Do the things right way",
    description:
      "Import all your calendly or huspot Configurations with just 1 click",
  },
  {
    img: Feat3Png,
    title: "Do the things right way",
    description:
      "Import all your calendly or huspot Configurations with just 1 click",
  },
  {
    img: Feat4Png,
    title: "Do the things right way",
    description:
      "Import all your calendly or huspot Configurations with just 1 click",
  },
];
