import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BootcampLesson } from "@/service/api/bootcamp/types"

export const BootcampFrontMatter = ({
  lessons,
}: {
  lessons: BootcampLesson[]
}) => (
  <Accordion
    type="multiple"
    className="p-4 bg-white border-neutral-300 rounded-md"
  >
    {lessons.map((lesson) => (
      <AccordionItem key={lesson.id} value={lesson.Title}>
        <AccordionTrigger>{lesson.Title}</AccordionTrigger>
        <AccordionContent>
          {lesson.Description}
          {lesson.Description}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
)
