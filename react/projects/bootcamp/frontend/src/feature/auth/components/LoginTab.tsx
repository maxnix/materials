import { Link } from "react-router-dom"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useEffect } from "react"
import { TabsContent } from "@/components/ui/tabs"
import {
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Input, PasswordInput } from "@/components/ui/input"
import {
  Form,
  FormButton,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form"
import { useToast } from "@/components/ui/toast/hook/use-toast"
import {
  useLoginMutation,
  useResendEmailVerificationMutation,
} from "@/service/api/auth"
import { SignupErrorResponse } from "@/service/api/auth/types"
import { ToastAction } from "@/components/ui/toast"
import { useAppDispatch } from "@/service/redux/hooks"
import { setToken } from "@/service/redux/slice/auth"

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(12, `Password Should Have at least 12 characters`)
    .max(100),
})

const formDefaultValues = {
  email: ``,
  password: ``,
}

type FormValues = z.infer<typeof formSchema>

export const LoginTabs = () => {
  const dispatch = useAppDispatch()
  const { toast } = useToast()
  const [login, { isLoading, data }] = useLoginMutation()
  const [resendMail] = useResendEmailVerificationMutation()
  const form = useForm<FormValues>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(formSchema),
    mode: `onTouched`,
  })

  const onSubmit = useCallback(
    async (values: FormValues) => {
      login({
        identifier: values.email,
        password: values.password,
      })
        .unwrap()
        .then(() => form.reset())
        .catch(({ data: { error } }: SignupErrorResponse) => {
          const isUnconfirmed =
            error?.message === `Your account email is not confirmed`
          toast({
            title: `Login Failed`,
            description: error?.message || `Errore Generico`,
            duration: 5000,
            variant: isUnconfirmed ? `info` : `destructive`,
            action: isUnconfirmed ? (
              <ToastAction
                altText="Resend Email"
                className="hover:bg-slate-50 hover:text-slate-900"
                onClick={() =>
                  resendMail({ email: values.email })
                    .unwrap()
                    .then(() => {
                      toast({
                        title: `Email Sent`,
                        description: `Check your inbox for the confirmation email`,
                        duration: 5000,
                        variant: `success`,
                      })
                    })
                }
              >
                Resend
              </ToastAction>
            ) : undefined,
          })
        })
    },
    [form, login, toast, resendMail]
  )

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setToken(data.jwt))
      toast({
        title: `Login Successful`,
        description: `Welcome back!`,
        duration: 5000,
        variant: `success`,
      })
    }
  }, [toast, isLoading, data, dispatch])

  return (
    <TabsContent value="login">
      <SheetHeader>
        <SheetTitle>Login</SheetTitle>
        <SheetDescription>
          Enter your email and password to login to your account
        </SheetDescription>
      </SheetHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-4 py-4"
        >
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  placeholder="m@example.com"
                  {...field}
                  autoComplete="username"
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
                <PasswordInput {...field} placeholder="******" />
                <FormDescription className="text-xs text-gray-500">
                  Enter your password
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormButton className="w-full">Login</FormButton>
        </form>
      </Form>
      <Link
        className="inline-block w-full text-center text-sm underline mt-4"
        to="/auth/forgotpassword"
      >
        Forgot your password?
      </Link>
    </TabsContent>
  )
}
