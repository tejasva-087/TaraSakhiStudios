import HeroImageCarousel from "../../components/HeroImageCarousel";

import image1 from "../../assets/images/mainImages/mainimage-1.jpg";
import image2 from "../../assets/images/mainImages/mainimage-2.jpg";
import image3 from "../../assets/images/mainImages/mainimage-3.jpg";
import image4 from "../../assets/images/mainImages/mainimage-4.jpg";
import { DotIcon } from "@phosphor-icons/react";

function HeroSection() {
  return (
    <section>
      <div className="relative">
        <div className="mb-6">
          <HeroImageCarousel images={[image1, image2, image3, image4]} />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/60 hidden sm:block rounded-3xl"></div>
        </div>

        <h1 className="flex flex-col  font-normal uppercase mb-4  lg:flex  text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:absolute sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 ">
          <span className="tracking-wider pl-0 hidden sm:inline-block ">
            Crafting timeless
          </span>
          <span className="tracking-wider hidden sm:inline-block sm:pl-32 pl-24">
            designs for
          </span>
          <span className="tracking-wider hidden sm:inline-block pl-6">
            modern living
          </span>
          <span className="inline-block sm:hidden">
            Crafting timeless designs for modern living
          </span>
        </h1>
      </div>
      <div className="flex items-start justify-between gap-[25vw]">
        <div className="sm:grid grid-cols-2 gap-12 lg:gap-12">
          <p className="leading-relaxed text-zinc-300">
            We create architecture, interiors, and objects where simplicity
            meets warmth, spaces that invite you to pause, feel, and live with
            intention.
          </p>
          <p className="leading-relaxed text-zinc-300 hidden sm:block">
            Crafting Timeless Architecture That Speaks in the Language of
            Simplicity, Warmth, and Human Connection.
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <p className="uppercase text-zinc-50 tracking-wide text-lg">Modern</p>
          <p className="uppercase text-zinc-50 tracking-wide text-lg">&</p>
          <p className="uppercase text-zinc-50 tracking-wide text-lg">
            Minimalist
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
