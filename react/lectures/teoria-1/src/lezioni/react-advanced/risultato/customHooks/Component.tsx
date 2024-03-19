import { useFetch, useSortedList } from "./useCustomHook"

const unsortedArray = [3, 1, 2]

export const Component = () => {
  const { sortedList } = useSortedList(unsortedArray)
  const { data, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`
  )

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Custom Hook</h2>
      <section>
        {sortedList.map((el, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>{el}</div>
        ))}
      </section>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <section>
          {data.map((el: { id: number; title: string }) => (
            <div key={el.id}>{el.title}</div>
          ))}
        </section>
      )}
    </div>
  )
}
