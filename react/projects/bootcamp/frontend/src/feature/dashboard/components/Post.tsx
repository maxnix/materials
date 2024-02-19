import { useNavigate } from "react-router-dom"
import { cva, type VariantProps } from "class-variance-authority"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const postVariants = cva(
  `cursor-pointer flex hover:shadow-md border border-neutral-200`,
  {
    variants: {
      variant: {
        default: `flex-col rounded-lg bg-white`,
        horizontal: `flex-row items-center rounded-lg bg-white`,
      },
      size: {
        full: `w-full`,
        default: `w-full max-w-[387px]`,
      },
    },
    defaultVariants: {
      variant: `default`,
      size: `default`,
    },
  }
)

interface PostProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof postVariants> {
  title: string
  img?: string
  slug: string
  description?: string
  category: string
}

export const Post = ({
  title,
  img,
  slug,
  description,
  category,
  className,
  variant,
  size,
  ...rest
}: PostProps) => {
  const navigate = useNavigate()
  return (
    <Card
      {...rest}
      onClick={() => navigate(slug)}
      className={cn(postVariants({ variant, size }), className)}
    >
      <CardHeader className={variant === `horizontal` ? `w-1/2` : undefined}>
        <AspectRatio
          ratio={variant === `horizontal` ? 1 : 16 / 9}
          className="overflow-hidden"
        >
          {img ? (
            <img src={img} alt={title} className={`Image rounded-md`} />
          ) : (
            <div className="bg-neutral-300" />
          )}
        </AspectRatio>
      </CardHeader>
      <CardContent
        className={`flex flex-col gap-4 w-full ${variant === `horizontal` ? `p-0` : ``}`}
      >
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-gray-400 mt-2">{description}</p>
          )}
        </div>
        <Badge variant="secondary" className="w-fit">
          {category}
        </Badge>
      </CardContent>
    </Card>
  )
}
