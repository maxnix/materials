import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { ReloadIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Button } from "../button/button"
import { FormFieldContext, FormItemContext } from "./FormContext"
import { useFormField } from "./useFormField"

const Form = FormProvider

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  const ctx = React.useMemo(() => ({ name: props.name }), [props.name])
  return (
    <FormFieldContext.Provider value={ctx}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}
FormField.displayName = `FormField`

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()
  const ctx = React.useMemo(() => ({ id }), [id])
  return (
    <FormItemContext.Provider value={ctx}>
      <div ref={ref} className={cn(`space-y-2`, className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = `FormItem`

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && `text-destructive`, className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = `FormLabel`

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = `FormControl`

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn(`text-sm text-muted-foreground`, className)}
      {...props}
    />
  )
})
FormDescription.displayName = `FormDescription`

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn(`text-sm font-medium text-destructive`, className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = `FormMessage`

const FormButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { formState } = useFormContext()

  return (
    <Button
      ref={ref}
      className={cn(className)}
      type="submit"
      {...props}
      disabled={formState.isSubmitting || !formState.isValid}
      variant={
        formState.isSubmitting || !formState.isValid ? `secondary` : `default`
      }
    >
      {formState.isSubmitting ? (
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      ) : null}
      {children}
    </Button>
  )
})

FormButton.displayName = `FormButton`

export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormButton,
  FormField,
}
