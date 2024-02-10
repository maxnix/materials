import { useNavigate } from "react-router-dom"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Form,
  FormButton,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form"
import { Input } from "@/components/ui/input"
import { useForgotPasswordMutation } from "../api"
import { useToast } from "@/components/ui/toast/hook/use-toast"

const formSchema = z.object({
  email: z.string().email(),
})

type FormValues = z.infer<typeof formSchema>

const defaultValues = {
  email: ``,
}

export const ForgotSheet = () => {
  const [forgotPassword] = useForgotPasswordMutation()
  const { toast } = useToast()
  const navigate = useNavigate()
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: `onSubmit`,
  })

  const onSubmit = useCallback(
    (data: FormValues) => {
      forgotPassword(data)
        .unwrap()
        .then(() => {
          form.reset()
          toast({
            title: `Password Reset Email Sent`,
            description: `Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.`,
            variant: `info`,
          })
        })
        .catch(() => {
          toast({
            title: `Something went wrong!`,
            variant: `destructive`,
          })
        })
        .finally(() => {
          form.reset()
        })
    },
    [form, forgotPassword, toast]
  )

  return (
    <Sheet
      key="2"
      defaultOpen
      onOpenChange={(open) => {
        if (open === false) {
          navigate(-1)
        }
      }}
    >
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Forgot Password</SheetTitle>
          <SheetDescription>
            Enter your email address to reset your password
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 w-full">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      type="email"
                      autoComplete="username"
                      placeholder="m@example.com"
                      {...field}
                    />
                    <FormDescription className="text-xs text-gray-500">
                      Enter a valid email address
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormButton className="w-full">Reset Password</FormButton>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  )
}
