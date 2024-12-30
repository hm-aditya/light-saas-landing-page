import ArrowIcon from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png"
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5  md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_90%)] overflow-x-clip ">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracting-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to Productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accompolishment with an app designed to track
              your progess, motivate your efforts, and celebrate your success
            </p>
            <div className="flex gap-4 mt-[30px] items-center">
              <button className="btn">Get for Free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={CogImage}
              alt="Cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            /> 
            <Image
              src={cylinderImage}
              alt="Cylinder"
              width={220} height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              alt="Noodle"
              width={220} height={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
