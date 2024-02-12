import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button/button"
import HeroImg from "../image/IntroImg.jpeg"

export const TopHero = () => (
  <section>
    <div className="flex flex-row w-full h-screen">
      <div className="flex flex-col w-1/3 h-full bg-green-300">
        <div className="flex flex-col justify-center gap-4 w-full h-full px-8">
          <h1
            className="text-4xl font-bold "
            style={{
              textAlign: `left`,
            }}
          >
            <span className="text-white">Impara</span> e accresci le tue skills
            professionali
          </h1>
          <h3
            className="text-md font-bol"
            style={{
              textAlign: `left`,
            }}
          >
            Accresci costantemente le tue competenze professionali grazie ai
            nostri corsi pratici sul campo e progetti pazzeschi
          </h3>
          <Link to="app/dashboard">
            <Button className="w-fit">Scopri i corsi</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-2/3 h-full bg-white">
        <div className="flex flex-col justify-end items-center w-full h-full">
          <img src={HeroImg} alt="hero" />
        </div>
      </div>
    </div>
  </section>
)
