type BootcampHeroProps = {
  title: string
  description: string
  image: string
}

export const BootcampHero = ({
  title,
  description,
  image,
}: BootcampHeroProps) => (
  <div className="relative bg-gray-800">
    <div className="absolute inset-0">
      <img
        className="w-full h-full object-cover"
        src={`${import.meta.env.VITE_STRAPI_URL}${image}`}
        alt={title}
      />
      <div
        className="absolute inset-0 bg-gray-500"
        style={{ mixBlendMode: `multiply` }}
      />
    </div>
    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-xl text-gray-300">{description}</p>
    </div>
  </div>
)
