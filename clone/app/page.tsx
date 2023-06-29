import Image from "next/image"
import Navbar from "./components/Navbar"
import Hero from "./components/HeroSection/Hero"

export default function Home() {
  return (
    <div>
      <div className="relative z-50">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      <div>
        <div className="overflow-hidden">
          <div className="relative h-screen">
            <img
              className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image"
              width="4377"
              src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
              alt=""
            />
          </div>
          <div className="px-3 Hero-section">
            <Hero />
          </div>
        </div>
      </div>
    </div>
  )
}
