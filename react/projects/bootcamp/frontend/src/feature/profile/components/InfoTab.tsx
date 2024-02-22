import { z } from "zod"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TabsContent } from "@/components/ui/tabs"
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useUpdatePasswordMutation } from "@/service/api/profile"
import { useAppDispatch } from "@/service/redux/hooks"
import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
  FormButton,
  Form,
} from "@/components/ui/form"
import { PasswordInput } from "@/components/ui/input"
import { useToast } from "@/components/ui/toast/hook/use-toast"
import { setToken, setUsername } from "@/service/redux/slice/auth"
import { SignupErrorResponse } from "@/service/api/auth/types"

const formSchema = z
  .object({
    currentPassword: z.string().min(12).max(100),
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
  currentPassword: ``,
  password: ``,
  confirmPassword: ``,
}

type FormValues = z.infer<typeof formSchema>

export const ProfileInfoTab = () => {
  const [resetPassword] = useUpdatePasswordMutation()
  const dispatch = useAppDispatch()
  const { toast } = useToast()
  const form = useForm<FormValues>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(formSchema),
    mode: `onTouched`,
  })
  const onSubmit = useCallback(
    (data: FormValues) => {
      resetPassword({
        currentPassword: data.currentPassword,
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
    [resetPassword, toast, dispatch, form]
  )
  return (
    <TabsContent value="info">
      <SheetHeader>
        <SheetTitle>Modifica Password</SheetTitle>
        <SheetDescription>Crea una nuova password</SheetDescription>
      </SheetHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <FormField
            name="currentPassword"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel htmlFor="password">Password</FormLabel>
                <PasswordInput {...field} placeholder="********" />
                <FormDescription className="text-xs text-gray-500">
                  Insert your current password
                </FormDescription>
                {field.value ? <FormMessage /> : null}
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
          <FormButton className="w-full">Reimposta Password</FormButton>
        </form>
      </Form>
    </TabsContent>
  )
}
