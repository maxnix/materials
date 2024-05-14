import { BootcampFrontMatter } from "../components/BootcampFrontMatter"
import { BootcampFooter } from "../components/BootcampFooter"
import { BootcampInfo } from "../components/BootcampInfo"

export const SingleBootcampPage = () => (
  <section className="bg-neutral-50">
    Hero
    <div className="max-w-[1140px] mx-auto">
      <div className="grid grid-cols-[minmax(540px,_1fr)_340px]">
        <div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">
              Vedi le lezioni del bootcamp
            </h2>
          </div>
          <BootcampFrontMatter />
          <div className="mt-12">Blocksss</div>
        </div>
        <BootcampInfo />
      </div>
    </div>
    <div className="mt-12 bg-zinc-900 py-16">
      <div className="max-w-[1140px] mx-auto">
        <BootcampFooter />
      </div>
    </div>
  </section>
)
