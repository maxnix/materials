import { Input, PasswordInput } from "@/components/ui/input";
import {
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import {
  Form,
  FormButton,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLoginMutation, useResendEmailVerificationMutation } from "../api";
import { setToken } from "../slice";
import { useAppDispatch } from "@/service/redux/hooks";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/toast/hook/use-toast";
import { SignupErrorResponse } from "../api/types";
import { ToastAction } from "@/components/ui/toast";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password Should Have at least 8 characters")
    .max(100),
});

const formDefaultValues = {
  email: "",
  password: "",
};

type FormValues = z.infer<typeof formSchema>;

export const LoginTabs = () => {
  const [resendConfirm] = useResendEmailVerificationMutation();
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, { data, isLoading }] = useLoginMutation();
  const form = useForm<FormValues>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  const onSubmit = useCallback(
    async (data: FormValues) => {
      login({
        identifier: data.email,
        password: data.password,
      })
        .unwrap()
        .then(() => {
          form.reset();
        })
        .catch(({ data: { error } }: SignupErrorResponse) => {
          const isUncorfimed =
            error.message === "Your account email is not confirmed";
          toast({
            title: "Login Failed",
            description: error.message,
            duration: 5000,
            variant: isUncorfimed ? "info" : "destructive",
            action: isUncorfimed ? (
              <ToastAction
                onClick={() => {
                  resendConfirm({ email: data.email })
                    .unwrap()
                    .then(() => {
                      toast({
                        title: "Email Sent",
                        description: "Email has been sent",
                        duration: 5000,
                        variant: "success",
                      });
                    });
                }}
                altText="Resend"
                className="hover:bg-slate-50 hover:text-black"
              >
                Resend
              </ToastAction>
            ) : undefined,
          });
        });
    },
    [form, login, toast, resendConfirm]
  );

  useEffect(() => {
    if (isLoading) return;
    if (data?.jwt) {
      dispatch(setToken(data.jwt));
      toast({
        title: "Login Success",
        description: "You have successfully logged in",
        duration: 5000,
        variant: "destructive",
      });
      navigate("/");
    }
  }, [data, isLoading, dispatch, navigate, toast]);

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
  );
};
