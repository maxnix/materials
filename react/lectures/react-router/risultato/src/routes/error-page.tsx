import { useRouteError, ErrorResponse } from "react-router-dom"

export const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse & { message?: string }

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
