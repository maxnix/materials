import { Button } from "@/components/ui/button"
import { Bootcamp } from "@/service/api/bootcamp/types"

type BootcampInfoProps = Pick<
  Bootcamp["attributes"],
  "Starts" | "ends" | "isRemote" | "seats" | "Iscrizioni"
>

const createDateString = (date: string) => {
  const d = new Date(date)
  return `${d.toLocaleDateString()}`
}

const checkAvailableSeats = (seats: number | null, Iscrizioni: number) => {
  if (seats) {
    return seats - Iscrizioni
  }
  return seats ?? 0 - Iscrizioni
}

export const BootcampInfo = ({
  Starts,
  ends,
  isRemote,
  seats,
  Iscrizioni,
}: BootcampInfoProps) => (
  <div className="relative">
    <div className="mt-24 max-w-[312px] ml-auto sticky top-20">
      <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-2">
        <h2 className="text-2xl font-semibold mb-4">Bootcamp Info</h2>
        <div className="flex items-center justify-between gap-4">
          <p className="text-md text-gray-600">Starts:</p>
          <p className="text-md font-medium">{createDateString(Starts)}</p>
        </div>
        <div className="flex items-center  justify-between gap-4">
          <p className="text-md text-gray-600">Ends:</p>
          <p className="text-md font-medium">{createDateString(ends)}</p>
        </div>
        <div className="flex items-center  justify-between gap-4">
          <p className="text-md text-gray-600">Remote:</p>
          <p className="text-md font-medium">{isRemote ? `Yes` : `No`}</p>
        </div>
        <div className="flex items-center  justify-between gap-4">
          <p className="text-md text-gray-600">Avaibale</p>
          {checkAvailableSeats(seats, Iscrizioni) > 0 ? (
            <p className="text-md font-medium">
              {checkAvailableSeats(seats, Iscrizioni)}
            </p>
          ) : (
            <p className="text-md font-medium">Not available</p>
          )}
        </div>
        {checkAvailableSeats(seats, Iscrizioni) > 0 ? (
          <Button>Enroll now</Button>
        ) : (
          <Button disabled variant="secondary">
            Not available
          </Button>
        )}
      </div>
    </div>
  </div>
)
