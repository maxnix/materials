import { useLoaderData } from "react-router-dom"
import { useMemo } from "react"
import { BootcamLoaderType } from "@/routes/dashboard"
import { BootcampHero } from "../components/BootcampHero"
import { BootcampFrontMatter } from "../components/BootcampFrontMatter"
import { BootcampBlocks } from "../components/BootcampBlocks"
import { BootcampFooter } from "../components/BootcampFooter"
import { BootcampInfo } from "../components/BootcampInfo"

export const SingleBootcampPage = () => {
  const { data } = useLoaderData() as BootcamLoaderType
  const { data: bootcampData, isLoading } = data || {}
  const heroData = useMemo(
    () => ({
      title: bootcampData?.attributes.Title || `Bootcamp Title`,
      description: bootcampData?.attributes.info || `Bootcamp Description`,
      image:
        bootcampData?.attributes.Cover.data.attributes.url || `Bootcamp Image`,
    }),
    [bootcampData]
  )

  const infoData = useMemo(
    () => ({
      Starts: bootcampData?.attributes.Starts || `Starts`,
      ends: bootcampData?.attributes.ends || `Ends`,
      isRemote: bootcampData?.attributes.isRemote || false,
      seats: bootcampData?.attributes.seats || 0,
      Iscrizioni: bootcampData?.attributes.Iscrizioni || 0,
      Product: bootcampData?.attributes.Product!,
    }),
    [bootcampData]
  )
  if (isLoading) return <div>Loading...</div>

  return (
    <section className="bg-neutral-50">
      <BootcampHero {...heroData} />
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-[minmax(540px,_1fr)_340px]">
          <div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">
                Vedi le lezioni del bootcamp
              </h2>
            </div>
            <BootcampFrontMatter
              lessons={bootcampData?.attributes.Lessons || []}
            />
            <div className="mt-12">
              <BootcampBlocks
                blocks={bootcampData?.attributes.Description || []}
              />
            </div>
          </div>
          <BootcampInfo {...infoData} />
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
