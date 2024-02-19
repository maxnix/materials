import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Post } from "./Post"
import { Skeleton } from "@/components/ui/skeleton"
import { useGetLast3CoursesQuery } from "@/service/api/course"
import { useGetLast3BootcampsQuery } from "@/service/api/bootcamp"

export const LearnSection = () => (
  <div>
    <h2 className="text-5xl font-bold text-center max-w-3xl mx-auto">
      Scegli tra una selezione di corsi premium
    </h2>
    <Tabs defaultValue="corsi" className="w-full mt-8">
      <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
        <TabsTrigger value="corsi">Corsi</TabsTrigger>
        <TabsTrigger value="bootcamp">Bootcamp</TabsTrigger>
      </TabsList>
      <div className="mt-8">
        <TabsContent value="corsi">
          <CourseTab />
        </TabsContent>
        <TabsContent value="bootcamp">
          <BootcampTab />
        </TabsContent>
      </div>
    </Tabs>
  </div>
)

const CourseTab = () => {
  const { data } = useGetLast3CoursesQuery()
  if (!data) return <SkeletonPosts />
  const [firstPost, ...rest] = data.data
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-8">
      <Post
        title={firstPost.attributes.Title}
        img="https://source.unsplash.com/random"
        description={firstPost.attributes.Description}
        slug={firstPost.id.toString()}
        category={firstPost.attributes.level}
        size="full"
      />
      <div className="grid grid-rows-2 gap-8">
        {rest.map((post) => (
          <Post
            key={post.id}
            title={post.attributes.Title}
            img="https://source.unsplash.com/random"
            description={post.attributes.Description}
            slug={post.id.toString()}
            category={post.attributes.level}
            variant="horizontal"
            size="full"
          />
        ))}
      </div>
    </div>
  )
}

const BootcampTab = () => {
  const { data } = useGetLast3BootcampsQuery()
  if (!data) return <SkeletonPosts />
  const [firstPost, ...rest] = data.data
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-8">
      <Post
        title={firstPost.attributes.Title}
        img="https://source.unsplash.com/random"
        slug={firstPost.id.toString()}
        category={new Date(firstPost.attributes.Starts).toLocaleDateString()}
        size="full"
      />
      <div className="grid grid-rows-2 gap-8">
        {rest.map((post) => (
          <Post
            key={post.id}
            title={post.attributes.Title}
            img="https://source.unsplash.com/random"
            slug={post.id.toString()}
            category={new Date(post.attributes.Starts).toLocaleDateString()}
            variant="horizontal"
            size="full"
          />
        ))}
      </div>
    </div>
  )
}

const SkeletonPosts = () => (
  <div className="grid grid-cols-2 grid-rows-1 gap-8">
    <div className="w-full flex flex-col gap-6 p-6  bg-neutral-300 rounded-lg">
      <AspectRatio ratio={16 / 9} className="overflow-hidden">
        <Skeleton className="w-full h-48" />
      </AspectRatio>
      <div className="flex flex-col gap-2">
        <Skeleton className="w-1/2 h-4" />
        <Skeleton className="w-3/4 h-4" />
        <Skeleton className="w-1/2 h-4" />
      </div>
    </div>
    <div className="grid grid-rows-2 gap-8">
      <div className="w-full flex items-center gap-6 p-6  bg-neutral-300 rounded-lg">
        <Skeleton className="w-48 h-48" />
        <div className="min-w-72 flex flex-col gap-2">
          <Skeleton className="w-1/2 h-4" />
          <Skeleton className="w-3/4 h-4" />
          <Skeleton className="w-1/2 h-4" />
        </div>
      </div>
      <div className="w-full flex items-center gap-6 p-6  bg-neutral-300 rounded-lg">
        <Skeleton className="w-48 h-48" />
        <div className="min-w-72 flex flex-col gap-2">
          <Skeleton className="w-1/2 h-4" />
          <Skeleton className="w-3/4 h-4" />
          <Skeleton className="w-1/2 h-4" />
        </div>
      </div>
    </div>
  </div>
)
