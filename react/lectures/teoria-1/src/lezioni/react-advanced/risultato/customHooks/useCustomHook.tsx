import React from "react"

function sortFn<T>(a: T, b: T) {
  if (a > b) return 1
  if (a < b) return -1
  return 0
}

export const useFetch = (url: string) => {
  const [data, setData] = React.useState<any>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    ;(async () => {
      const response = await fetch(url)
      const result = await response.json()
      setData(result)
      setLoading(false)
    })()
  }, [url])

  return { data, loading }
}

export function useSortedList<T>(list: T[]) {
  const [sortedList, setSortedList] = React.useState(list)

  React.useEffect(() => {
    setSortedList([...list].sort(sortFn))
  }, [list])
  return { sortedList, sortFn }
}
