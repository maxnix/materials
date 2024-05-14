import { useMemo } from "react"
import { useLoaderData } from "react-router-dom"
import { BootcampFrontMatter } from "../components/BootcampFrontMatter"
import { BootcampFooter } from "../components/BootcampFooter"
import { BootcampInfo } from "../components/BootcampInfo"
import { BootcampHero } from "../components/BootcampHero"
import { BootcampBlocks } from "../components/BootcampBlocks"
import { BootcampLoaderData } from "@/routes/dashboard"

export const MissingBootcampPage = () => <div>Bootcamp not found</div>

export const SingleBootcampPage = () => {
  const loaderData = useLoaderData() as BootcampLoaderData
  const bootcamp = loaderData.data?.data

  const heroData = useMemo(() => {
    if (!bootcamp) return null
    return {
      title: bootcamp.attributes.Title,
      description: bootcamp.attributes.info,
      image: bootcamp.attributes.Cover.data.attributes.url,
    }
  }, [bootcamp])

  return (
    <section className="bg-neutral-50">
      {heroData ? <BootcampHero {...heroData} /> : null}
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-[minmax(540px,_1fr)_340px]">
          <div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">
                Vedi le lezioni del bootcamp
              </h2>
            </div>
            {bootcamp?.attributes?.Lessons &&
            bootcamp?.attributes?.Lessons.length > 0 ? (
              <BootcampFrontMatter lessons={bootcamp?.attributes?.Lessons} />
            ) : (
              <div>Non ci sono lezioni</div>
            )}

            <div className="mt-12">
              {bootcamp?.attributes.Description &&
              bootcamp.attributes.Description.length > 0 ? (
                <BootcampBlocks blocks={bootcamp?.attributes?.Description} />
              ) : null}
            </div>
          </div>
          {bootcamp?.attributes ? (
            <BootcampInfo {...bootcamp.attributes} />
          ) : null}
        </div>
      </div>
      <div className="mt-12 bg-zinc-900 py-16">
        <div className="max-w-[1140px] mx-auto">
          <BootcampFooter />
        </div>
      </div>
    </section>
  )
}
