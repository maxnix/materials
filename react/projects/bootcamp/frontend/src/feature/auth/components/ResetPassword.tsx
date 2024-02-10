import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { PasswordInput } from "@/components/ui/input"
import {
  Form,
  FormButton,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form"
import { useResetPasswordMutation } from "../api"
import { useToast } from "@/components/ui/toast/hook/use-toast"
import { useAppDispatch } from "@/service/redux/hooks"
import { setToken, setUsername } from "../slice"
import { UnstyledLayout } from "@/feature/layout/UnstyledLayout"
import { SignupErrorResponse } from "../api/types"
import { Button } from "@/components/ui/button/button"

const formSchema = z
  .object({
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
  password: ``,
  confirmPassword: ``,
}

type FormValues = z.infer<typeof formSchema>

export const ResetPassword = () => {
  const [resetPassword, { isSuccess }] = useResetPasswordMutation()
  const dispatch = useAppDispatch()
  const { toast } = useToast()
  const [getParams] = useSearchParams()
  const code = getParams.get(`code`)
  const form = useForm<FormValues>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(formSchema),
    mode: `onTouched`,
  })

  const onSubmit = useCallback(
    (data: FormValues) => {
      if (!code) return
      resetPassword({
        code,
        password: data.password,
        passwordConfirmation: data.confirmPassword,
      })
        .unwrap()
        .then((res) => {
          if (res.jwt) {
            dispatch(setToken(res.jwt))
          }
          if (res.user) {
            dispatch(setUsername(res.user.id))
          }
        })
        .catch((err: SignupErrorResponse) => {
          toast({
            title: `Something went wrong`,
            variant: `destructive`,
            description: err.data.error.message,
          })
        })
        .finally(() => {
          form.reset()
        })
    },
    [code, resetPassword, toast, dispatch, form]
  )
  if (!isSuccess) {
    return (
      <div className="flex justify-center h-screen items-center">
        <div className="flex flex-col justify-center items-center gap-4 p-4  border border-gray-200 rounded-sm max-w-[468px]">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl font-bold text-center">
              Password Modificata
            </h1>
            <h3 className="text-md text-center text-gray-400">
              Complimenti, password reimpostata con successo
            </h3>
          </div>
          <Link to="/" className="w-full">
            <Button className="w-full">Accedi</Button>
          </Link>
        </div>
      </div>
    )
  }
  return (
    <UnstyledLayout>
      <div className="flex justify-center h-screen items-center">
        <div className="flex flex-col justify-center items-center gap-4 p-4  border border-gray-200 rounded-sm max-w-[468px]">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl font-bold text-center">Reset Password</h1>
            <h3 className="text-md text-center text-gray-400">
              Enter your new password to reset your password
            </h3>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
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
              <FormButton className="w-full">Reimposta Password</FormButton>
            </form>
          </Form>
        </div>
      </div>
    </UnstyledLayout>
  )
}
