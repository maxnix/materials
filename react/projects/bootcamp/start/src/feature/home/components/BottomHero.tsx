import { Button } from "@/components/ui/button/button"
import BottomImage from "../image/bottomImg.jpeg"

export const BottomHero = () => (
  <section>
    <div className="flex flex-row-reverse w-full h-screen">
      <div className="flex flex-col w-1/3 h-full bg-yellow-100">
        <div className="flex flex-col justify-center px-8 w-full h-full gap-4">
          <h1
            className="text-4xl font-bold "
            style={{
              textAlign: `left`,
            }}
          >
            <span className="text-yellow-400">Insegna</span> e aiuta gli altri a
            diventare dei professionisti
          </h1>
          <h3
            className="text-md font-bol"
            style={{
              textAlign: `left`,
            }}
          >
            Metti al servizio di altri professionisti l’esperienza che hai
            accumulato negli anni e sui tuoi progetti più ambizioni
          </h3>
          <Button className="w-fit">Diventa insegnante</Button>
        </div>
      </div>
      <div className="flex flex-col w-2/3 h-full bg-white">
        <div className="flex flex-col justify-end items-center w-full h-full">
          <img src={BottomImage} alt="second section" />
        </div>
      </div>
    </div>
  </section>
)
