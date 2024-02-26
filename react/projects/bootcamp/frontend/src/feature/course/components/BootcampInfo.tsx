import { useCallback, useEffect, useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Bootcamp } from "@/service/api/bootcamp/types"
import { useAppSelector } from "@/service/redux/hooks"
import { useUnsubscribeFromBootcampMutation } from "@/service/api/bootcamp"

type BootcampInfoProps = Pick<
  Bootcamp["attributes"],
  | "Starts"
  | "ends"
  | "isRemote"
  | "seats"
  | "Iscrizioni"
  | "Product"
  | "entrants"
>

const createDateString = (date: string) => {
  const d = new Date(date)
  return `${d.toLocaleDateString()}`
}

const validateDate = (date: string) => {
  const d = new Date(date)
  return d.getTime() > Date.now()
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
  entrants,
  Product: { payment_link },
}: BootcampInfoProps) => {
  const { email, id: userId } = useAppSelector((state) => state.profile)
  const params = useParams()
  const navigation = useNavigate()
  const { id: bootcampId } = params
  const [unsubscribeFromBootcamp, { isSuccess }] =
    useUnsubscribeFromBootcampMutation()
  const isAvailable = useMemo(() => {
    if (entrants) {
      return checkAvailableSeats(seats, entrants.data.length) > 0
    }
    return validateDate(Starts)
  }, [entrants, seats, Starts])

  const isSubscribed = useMemo(() => {
    if (entrants) {
      return entrants.data.some((entrant) => entrant.attributes.email === email)
    }
    return false
  }, [entrants, email])

  const handlePayment = useCallback(() => {
    if (typeof window !== `undefined`) {
      let url = `${payment_link}`
      let encodedEmail = ``
      if (email) {
        encodedEmail = encodeURIComponent(email)
        url = `${payment_link}?prefilled_email=${encodedEmail}`
      }
      window.location.href = url
    }
  }, [email, payment_link])

  const unsubscribe = useCallback(() => {
    if (typeof window !== `undefined`) {
      if (bootcampId && userId) unsubscribeFromBootcamp({ bootcampId, userId })
    }
  }, [bootcampId, unsubscribeFromBootcamp, userId])

  const handleClick = useCallback(() => {
    if (isSubscribed) {
      unsubscribe()
    } else {
      handlePayment()
    }
  }, [handlePayment, isSubscribed, unsubscribe])

  useEffect(() => {
    if (isSuccess) {
      navigation(0)
    }
  })
  return (
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
            {isAvailable ? (
              <p className="text-md font-medium">
                {checkAvailableSeats(seats, entrants?.data.length ?? 0)}
              </p>
            ) : (
              <p className="text-md font-medium">Not available</p>
            )}
          </div>
          {isAvailable ? (
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
