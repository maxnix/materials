import { useCallback, useMemo } from "react"
import { useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Bootcamp } from "@/service/api/bootcamp/types"
import { useAppSelector } from "@/service/redux/hooks"
import { useUnsubscribeFromBootcampMutation } from "@/service/api/bootcamp"

type BootcampAttributes = Bootcamp["attributes"]

type BootcampInfoProps = Pick<
  BootcampAttributes,
  | "Starts"
  | "ends"
  | "isRemote"
  | "seats"
  | "Iscrizioni"
  | "Product"
  | "entrants"
>

type ParsedBootcampInfo = BootcampInfoProps & {
  isAvaibale: boolean
}

const createDateString = (date: string) => {
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString()
}

const checkIfDateIsExpired = (date: string) => {
  const currentDate = new Date()
  const parsedDate = new Date(date)
  return currentDate > parsedDate
}

const checkSeatsAvailability = (seats: number, iscritti: number) =>
  seats - iscritti > 0

const extractBootcampInfo = (
  bootcamp: BootcampAttributes
): ParsedBootcampInfo => {
  const { Starts, seats, isRemote, ends, entrants, Product, Iscrizioni } =
    bootcamp
  return {
    Starts: createDateString(Starts),
    ends: createDateString(ends),
    isRemote,
    seats,
    Iscrizioni,
    Product,
    entrants,
    isAvaibale:
      !checkIfDateIsExpired(Starts) &&
      checkSeatsAvailability(seats ?? 0, entrants?.data.length ?? 0),
  }
}

export const BootcampInfo = (props: BootcampAttributes) => {
  const { id: bootcampId } = useParams<{ id: string }>()
  const parsedProps = useMemo(() => extractBootcampInfo(props), [props])
  const { isAvaibale } = useMemo(() => parsedProps, [parsedProps])
  const profile = useAppSelector((state) => state.profile.profile)
  const isSubscribed = useMemo(() => {
    if (!profile) return false
    return (
      parsedProps.entrants?.data.some(
        (entrant) => entrant.attributes.email === profile.email
      ) ?? false
    )
  }, [profile, parsedProps.entrants?.data])

  const handlePayment = useCallback(() => {
    if (!profile) return
    let url = parsedProps.Product.payment_link
    let encodedEmail = ``
    if (profile.email) {
      encodedEmail = encodeURIComponent(profile.email)
      url = `${parsedProps.Product.payment_link}?prefilled_email=${encodedEmail}`
    }
    window.location.href = url
  }, [parsedProps.Product.payment_link, profile])
  const [unsubscribe] = useUnsubscribeFromBootcampMutation()
  const handleUnsubscribe = useCallback(() => {
    if (!profile || !profile.id || !bootcampId) return
    unsubscribe({ userId: profile.id, bootcampId })
  }, [bootcampId, profile, unsubscribe])

  const handleClick = isSubscribed ? handleUnsubscribe : handlePayment

  return (
    <div className="relative">
      <div className="mt-24 max-w-[312px] ml-auto sticky top-20">
        <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-2">
          <h2 className="text-2xl font-semibold mb-4">Bootcamp Info</h2>
          <div className="flex items-center justify-between gap-4">
            <p className="text-md text-gray-600">Starts:</p>
            <p className="text-md font-medium">{parsedProps.Starts}</p>
          </div>
          <div className="flex items-center  justify-between gap-4">
            <p className="text-md text-gray-600">Ends:</p>
            <p className="text-md font-medium">{parsedProps.ends}</p>
          </div>
          <div className="flex items-center  justify-between gap-4">
            <p className="text-md text-gray-600">Remote:</p>
            <p className="text-md font-medium">
              {parsedProps.isRemote ? `Yes` : `No`}
            </p>
          </div>
          <div className="flex items-center  justify-between gap-4">
            <p className="text-md text-gray-600">Avaibale</p>
            {isAvaibale ? (
              <p className="text-md font-medium">
                {isAvaibale && parsedProps.seats
                  ? parsedProps.seats - (parsedProps.entrants?.data.length ?? 0)
                  : 0}
              </p>
            ) : (
              <p className="text-md font-medium">Not available</p>
            )}
          </div>
          {isAvaibale ? (
            <Button
              variant={isSubscribed ? `destructive` : `default`}
              onClick={handleClick}
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
