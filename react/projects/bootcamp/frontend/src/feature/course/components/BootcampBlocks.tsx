/* eslint-disable react/no-array-index-key */
import {
  Block,
  HeadingBlock,
  ListBlock,
  ParagraphBlock as ParagraphBlockType,
} from "@/service/api/bootcamp/types"

const HeadigBlock = ({ level, children }: Extract<Block, HeadingBlock>) => {
  switch (level) {
    case 1:
      return <h1 className="text-5xl font-semibold">{children[0].text}</h1>
    case 2:
      return <h2 className="text-4xl font-semibold">{children[0].text}</h2>
    case 3:
      return <h3 className="text-3xl font-semibold">{children[0].text}</h3>
    case 4:
      return <h4 className="text-2xl font-semibold">{children[0].text}</h4>
    case 5:
      return <h5 className="text-xl font-semibold">{children[0].text}</h5>
    case 6:
      return <h6 className="text-lg font-semibold">{children[0].text}</h6>
    default:
      return null
  }
}

const ParagraphBlock = ({ children }: Extract<Block, ParagraphBlockType>) => (
  <p className="text-lg text-gray-500">
    {children.map((child) => child.text).join(``)}
  </p>
)

const ListBlockComponent = ({ children }: Extract<Block, ListBlock>) => (
  <ul className="flex flex-col gap-2">
    {children.map((child) => (
      <li className="list-item list-disc" key={child.children[0].text}>
        {child.children[0].text}
      </li>
    ))}
  </ul>
)

export const BootcampBlocks = ({ blocks }: { blocks: Block[] }) => (
  <div className="flex flex-col gap-4">
    {blocks.map((block, index) => {
      switch (block.type) {
        case `heading`:
          return <HeadigBlock key={index} {...(block as HeadingBlock)} />
        case `paragraph`:
          return (
            <ParagraphBlock key={index} {...(block as ParagraphBlockType)} />
          )
        case `list`:
          return <ListBlockComponent key={index} {...(block as ListBlock)} />
        default:
          return null
      }
    })}
  </div>
)
