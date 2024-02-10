import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback } from "react"
import { Button } from "@/components/ui/button/button"
import { Input, PasswordInput } from "@/components/ui/input"
import {
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { TabsContent } from "@/components/ui/tabs"
import {
  Form,
  FormButton,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form"
import { useRegisterMutation } from "../api"
import { useToast } from "@/components/ui/toast/hook/use-toast"
import { SignupErrorResponse } from "../api/types"

const formSchema = z
  .object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    password: z
      .string()
      .min(12)
      .max(100)
      .refine(
        (password) =>
          /[a-z]/.test(password) &&
          /[A-Z]/.test(password) &&
          /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(
            password
          ),
        `Password must contain at least one uppercase letter, one lowercase letter, one number and one special character`
      ),
    confirmPassword: z.string().min(12).max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: `Passwords do not match`,
    path: [`confirmPassword`],
  })

const formDefaultValues = {
  username: ``,
  email: ``,
  password: ``,
  confirmPassword: ``,
}

type FormValues = z.infer<typeof formSchema>

const SuccessFullyRegisterd = () => (
  <>
    <TabsContent value="register">
      <SheetHeader>
        <SheetTitle>Successfully Registered</SheetTitle>
        <SheetDescription className="text-gray-500">
          Verify your email address to complete the registration process
        </SheetDescription>
      </SheetHeader>
    </TabsContent>
    <SheetFooter className="mt-8">
      <SheetClose asChild>
        <Button className="w-full" variant="outline">
          Close
        </Button>
      </SheetClose>
    </SheetFooter>
  </>
)

export const RegisterTab = () => {
  const [register, { isSuccess }] = useRegisterMutation()
  const { toast } = useToast()
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
    mode: `all`,
  })

  const onSubmit = useCallback(
    (values: FormValues) => {
      register({
        username: values.username,
        email: values.email,
        password: values.password,
      })
        .unwrap()
        .then(() => {
          form.reset()
          toast({
            title: `Successfully Registered`,
            description: `Verify your email address to complete the registration process`,
            variant: `success`,
          })
        })
        .catch((err: SignupErrorResponse) => {
          toast({
            title: `Something went wrong`,
            description: JSON.stringify(err.data.error.message),
            variant: `destructive`,
          })
        })
    },
    [form, register, toast]
  )
  if (form.formState.isSubmitSuccessful && isSuccess)
    return <SuccessFullyRegisterd />
  return (
    <TabsContent value="register">
      <SheetHeader>
        <SheetTitle>Register</SheetTitle>
        <SheetDescription>
          Enter your details to create a new account
        </SheetDescription>
      </SheetHeader>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-4 py-4"
        >
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel htmlFor="username">Name</FormLabel>
                <Input placeholder="David Parenzo" {...field} />
                <FormDescription className="text-xs text-gray-500">
                  Enter your full name
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  {...field}
                  placeholder="iltigre@gmail.com"
                  type="email"
                />
                <FormDescription className="text-xs text-gray-500">
                  Enter a valid email address
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel htmlFor="password">Password</FormLabel>
                <PasswordInput {...field} placeholder="********" />
                <FormDescription className="text-xs text-gray-500">
                  Min 12 characters, 1 uppercase, 1 lowercase, 1 number, 1
                  special character
                </FormDescription>
                {field.value ? <FormMessage /> : null}
              </FormItem>
            )}
          />

          <FormField
            name="confirmPassword"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel htmlFor="confirmPassword">
                  Confirm Password
                </FormLabel>
                <PasswordInput {...field} placeholder="********" />
                <FormDescription className="text-xs text-gray-500">
                  Re-enter your password
                </FormDescription>
                {field.value ? <FormMessage /> : null}
              </FormItem>
            )}
          />
          <FormButton className="w-full">Register</FormButton>
        </form>
      </Form>
    </TabsContent>
  )
}
