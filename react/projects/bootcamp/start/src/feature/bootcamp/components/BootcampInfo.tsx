import { useMemo } from "react"
import { Button } from "@/components/ui/button"

export const BootcampInfo = () => {
  const isAvaibale = useMemo(() => Math.random() > 0.5, [])
  const isSubscribed = useMemo(() => Math.random() > 0.5, [])

  return (
    <div className="relative">
      <div className="mt-24 max-w-[312px] ml-auto sticky top-20">
        <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-2">
          <h2 className="text-2xl font-semibold mb-4">Bootcamp Info</h2>
          <div className="flex items-center justify-between gap-4">
            <p className="text-md text-gray-600">Starts:</p>
            <p className="text-md font-medium">data di inizio</p>
          </div>
          <div className="flex items-center  justify-between gap-4">
            <p className="text-md text-gray-600">Ends:</p>
            <p className="text-md font-medium">data di fine</p>
          </div>
          <div className="flex items-center  justify-between gap-4">
            <p className="text-md text-gray-600">Remote:</p>
            <p className="text-md font-medium">yes</p>
          </div>
          <div className="flex items-center  justify-between gap-4">
            <p className="text-md text-gray-600">Avaibale</p>
            {isAvaibale ? (
              <p className="text-md font-medium">{isAvaibale ? 10 : 0}</p>
            ) : (
              <p className="text-md font-medium">Not available</p>
            )}
          </div>
          {isAvaibale ? (
            <Button
              variant={isSubscribed ? `destructive` : `default`}
              // onClick={handleClick}
            >
              {isSubscribed ? `Unsubscribe` : `Subscribe`}
            </Button>
          ) : (
            <Button disabled variant="secondary">
              Not available
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
